import {
  default_annotations,
  type AnnotationPlugin,
  type HighlightOptions,
} from "mdsvex/highlight";
import { parse, type AST } from "svelte/compiler";
import type { Plugin } from "vite";

import { renderLineJump } from "./line-jumps.ts";

export function codeHighlightOptions(): HighlightOptions {
  let notes = new Map<number, string[]>();

  const callout: AnnotationPlugin = {
    verbs: ["callout"],
    parse: "raw",
    handle(input) {
      const raw = String(input.args).trim();
      let message = raw;
      let target = "";
      if (raw.startsWith("=")) {
        const match = /^(=(?:"(?:\\.|[^"\\])*"|[^\s|]+))\s*\|\s*(.+)$/u.exec(raw);
        if (!match) return issue("Use [!callout =name | Explanation] for a text target");
        [, target, message] = match;
      }
      if (!message.trim()) return issue("A callout requires a nonempty explanation");
      const scope = input.standalone ? "+1" : "";
      const ranges = target
        ? input.resolve_all(`${target} ${scope}`.trim())
        : [input.resolve(scope)];
      const line = ranges[0].start_line;
      if (input.standalone && line <= input.marker.line) {
        return issue("A standalone callout requires a following code line");
      }
      notes.set(line, [...(notes.get(line) ?? []), message.replace(/\\([\]\\])/g, "$1")]);
      return {
        overlays: ranges.map((range) => ({
          start: range.start,
          end: range.end,
          classification: target ? "code-callout-target" : "code-callout-line",
          line_mode: !target,
        })),
      };
    },
  };

  const annotations = [...default_annotations, callout].map<AnnotationPlugin>((plugin) => ({
    ...plugin,
    handle(input) {
      const output = plugin.handle(input);
      if (!input.standalone || output?.consumed === false || !notes.has(input.marker.line)) {
        return output;
      }
      // A following annotation-only line is removed before line hooks run.
      // Report the lost note instead of silently attaching it to invisible code.
      notes.delete(input.marker.line);
      return {
        ...output,
        issues: [
          ...(output?.issues ?? []),
          ...issue("A callout must target a visible code line, not another standalone annotation")
            .issues,
        ],
      };
    },
  }));

  return {
    languages: { scss: "css" },
    annotations,
    parse_meta(meta, options) {
      // mdsvex highlights each fence synchronously: parse_meta, annotations, then line hooks.
      // Capture this fence's map so another fence can never inherit its notes.
      const blockNotes = (notes = new Map());
      const base = renderLineJump(meta, options);
      return {
        ...base,
        line(number, sourceLine) {
          const original = base.line?.(number, sourceLine);
          const messages = blockNotes.get(sourceLine);
          return {
            ...original,
            attrs: {
              ...original?.attrs,
              ...(messages ? { "data-code-callouts": JSON.stringify(messages) } : {}),
            },
          };
        },
      };
    },
  };
}

function issue(message: string): { issues: { kind: "malformed"; message: string }[] } {
  return { issues: [{ kind: "malformed", message }] };
}

function escapeText(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("{", "&#123;")
    .replaceAll("}", "&#125;");
}

export function transformCallouts(code: string) {
  if (!code.includes("data-code-callouts")) return code;
  const ast = parse(code, { modern: true });
  const edits: { start: number; end: number; text: string }[] = [];
  function visit(value: unknown) {
    if (!value || typeof value !== "object") return;
    if ("type" in value && value.type === "RegularElement") {
      const element = value as AST.RegularElement;
      const attr = element.attributes.find(
        (item) => item.type === "Attribute" && item.name === "data-code-callouts",
      );
      if (element.name === "span" && attr?.type === "Attribute" && Array.isArray(attr.value)) {
        const text = attr.value[0];
        if (text?.type !== "Text") throw new Error("Invalid generated callout metadata");
        const messages: unknown = JSON.parse(text.data);
        if (!Array.isArray(messages) || !messages.every((message) => typeof message === "string")) {
          throw new Error("Invalid generated callout messages");
        }
        edits.push({ start: attr.start, end: attr.end, text: "" });
        edits.push({
          start: element.start,
          end: element.start,
          text: '<span class="code-annotated-line">',
        });
        edits.push({
          start: element.end,
          end: element.end,
          text:
            messages
              .map((message) => `<span class="code-note" role="note">${escapeText(message)}</span>`)
              .join("") + "</span>",
        });
      }
    }
    for (const child of Object.values(value)) visit(child);
  }
  visit(ast.fragment);
  for (const edit of edits.sort((a, b) => b.start - a.start)) {
    code = code.slice(0, edit.start) + edit.text + code.slice(edit.end);
  }
  return code;
}

export function calloutMarkup(): Plugin {
  return {
    name: "code-callout-markup",
    enforce: "pre",
    transform(code, id) {
      if (!id.split("?")[0].endsWith(".md") || !code.includes("data-code-callouts")) return;
      return { code: transformCallouts(code), map: null };
    },
  };
}
