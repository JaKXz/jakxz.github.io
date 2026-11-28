import { fence_meta, type Bundle, type DirectiveHandler, type NodeView } from "mdsvex/compile";
import { parse, type AST } from "svelte/compiler";
import type { Plugin } from "vite";

const moduleId = "#assets/js/markdown/index.ts";
const names = new Set(["codeTabs", "codeWalkthrough", "codeStep"]);

function children(node: NodeView) {
  const result = [];
  for (let child = node.first_child; child; child = child.next) result.push(child);
  return result;
}

const validate: DirectiveHandler = (node, context) => {
  return () => {
    const name = node.attrs.name;
    const args = node.attrs.args ?? {};
    const fail = (message: string) => {
      throw new Error(
        `${context.filename ?? "Markdown"}${node.position ? `:${node.position.start.line}` : ""}: ${message}`,
      );
    };
    if (node.type !== "directive_container") fail(`${name} must be a container directive`);
    if (!args.title?.trim()) fail(`${name} requires a nonempty title`);
    if (name === "codeWalkthrough" && args.mode && !["click", "scroll"].includes(args.mode)) {
      fail('codeWalkthrough mode must be "click" or "scroll"');
    }
    for (const key of Object.keys(args)) {
      if (key !== "title" && !(name === "codeWalkthrough" && key === "mode")) {
        fail(`${name} does not support the ${key} argument`);
      }
    }
    const parent = node.parent;
    if (name === "codeStep") {
      if (parent?.type !== "directive_container" || parent.attrs.name !== "codeWalkthrough") {
        fail("codeStep must be directly inside codeWalkthrough");
      }
    } else {
      for (let ancestor = parent; ancestor; ancestor = ancestor.parent) {
        if (ancestor.type === "directive_container" && names.has(ancestor.attrs.name)) {
          fail("Nested code presentation groups are not supported");
        }
      }
    }
    const body = children(node).filter(
      (child) => child.type !== "html_comment" && child.type !== "line_break",
    );
    if (!body.length) fail(`${name} must not be empty`);
    if (name === "codeTabs") {
      for (const child of body) {
        if (child.type !== "code_fence") fail("codeTabs accepts only fenced code blocks");
        if (!fence_meta(child.info).title?.trim()) fail("Every codeTabs fence requires a title");
      }
    } else if (name === "codeWalkthrough") {
      for (const child of body) {
        if (child.type !== "directive_container" || child.attrs.name !== "codeStep") {
          fail("codeWalkthrough accepts only codeStep containers");
        }
      }
    } else {
      const fences = body.filter((child) => child.type === "code_fence");
      if (fences.length !== 1 || body.at(-1) !== fences[0]) {
        fail("codeStep requires one code fence after its explanation");
      }
      if (body.length < 2) fail("codeStep requires an explanation before its code fence");
    }
  };
};

export const presentationDirectives: Bundle = {
  name: "code-presentations",
  module: moduleId,
  directives: {
    codeTabs: { parse: validate },
    codeWalkthrough: { parse: validate },
    codeStep: { parse: validate },
  },
};

/**
 * Compile the groups into snippet props rather than discovering children after mounting.
 * The same component interfaces work in ordinary Svelte files, and SSR keeps every example.
 */
export function transformPresentations(code: string) {
  const ast = parse(code, { modern: true });
  const aliases = new Map<string, string>();
  for (const statement of ast.instance?.content.body ?? []) {
    if (statement.type !== "ImportDeclaration") continue;
    for (const specifier of statement.specifiers) {
      // Vite routes these imports through mdsvex virtual modules; direct compile keeps moduleId.
      if (
        specifier.type === "ImportSpecifier" &&
        specifier.imported.type === "Identifier" &&
        specifier.local.name.includes("_MDSVEX_")
      ) {
        aliases.set(specifier.local.name, specifier.imported.name);
      }
    }
  }
  const replacements: { start: number; end: number; text: string }[] = [];
  let sequence = 0;
  const freshName = () => {
    let name;
    do name = `mdsvexCodeSnippet${sequence++}`;
    while (code.includes(name));
    return name;
  };
  const transform = (group: AST.Component) => {
    const kind = aliases.get(group.name);
    if (kind !== "codeTabs" && kind !== "codeWalkthrough") return;
    const prop = kind === "codeTabs" ? "items" : "steps";
    if (group.attributes.some((attr) => attr.type === "Attribute" && attr.name === prop)) return;
    const body = group.fragment.nodes.filter((node) => node.type === "Component");
    if (!body.length) throw new Error(`${kind} has no compiled children`);
    const snippets = [];
    const items = [];
    for (const item of body) {
      const codeName = freshName();
      if (kind === "codeTabs") {
        snippets.push(`{#snippet ${codeName}()}${code.slice(item.start, item.end)}{/snippet}`);
        items.push(`{title:${JSON.stringify(staticProp(item, "title"))},code:${codeName}}`);
      } else {
        const fence = item.fragment.nodes.find(
          (node) => node.type === "Component" && aliases.get(node.name) === "pre",
        );
        if (!fence) throw new Error("codeStep requires a compiled code fence");
        const contentName = freshName();
        const prose = code.slice(item.fragment.nodes[0]?.start ?? fence.start, fence.start);
        snippets.push(`{#snippet ${contentName}()}${prose}{/snippet}`);
        snippets.push(`{#snippet ${codeName}()}${code.slice(fence.start, fence.end)}{/snippet}`);
        items.push(
          `{title:${JSON.stringify(staticProp(item, "title"))},content:${contentName},code:${codeName}}`,
        );
      }
    }
    const mode =
      kind === "codeWalkthrough"
        ? ` mode={${JSON.stringify(staticProp(group, "mode") ?? "click")}}`
        : "";
    replacements.push({
      start: group.start,
      end: group.end,
      text: `<${group.name} title={${JSON.stringify(staticProp(group, "title"))}}${mode} ${prop}={[${items.join(",")}]}>${snippets.join("\n")}</${group.name}>`,
    });
  };
  visitComponents(ast.fragment, transform);
  for (const replacement of replacements.sort((a, b) => b.start - a.start)) {
    code = code.slice(0, replacement.start) + replacement.text + code.slice(replacement.end);
  }
  return code;
}

export function presentationMarkup(): Plugin {
  return {
    name: "code-presentation-markup",
    enforce: "pre",
    transform(code, id) {
      if (!id.split("?")[0].endsWith(".md") || !code.includes("_MDSVEX_D_")) return;
      return { code: transformPresentations(code), map: null };
    },
  };
}

function staticProp(node: AST.Component, name: string) {
  const attr = node.attributes.find((entry) => entry.type === "Attribute" && entry.name === name);
  if (attr?.type !== "Attribute" || attr.value === true) return;
  if (Array.isArray(attr.value) && attr.value.length !== 1) return;
  const value = Array.isArray(attr.value) ? attr.value[0] : attr.value;
  if (value.type === "Text") return value.data;
  if (value.type === "ExpressionTag" && value.expression.type === "Literal") {
    return value.expression.value;
  }
}

function visitComponents(value: unknown, visit: (node: AST.Component) => void) {
  if (!value || typeof value !== "object") return;
  if ("type" in value && value.type === "Component") {
    visit(value as AST.Component);
  }
  for (const child of Object.values(value)) visitComponents(child, visit);
}
