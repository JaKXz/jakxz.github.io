import { fence_meta } from "mdsvex/compile";
import { parse } from "svelte/compiler";

/** @type {import('mdsvex/compile').ParsePlugin} */
export const validateLineJumps = {
  name: "line-jumps",
  code_fence: {
    parse(node, context) {
      return () => {
        try {
          const jump = readLineJump(fence_meta(node.info).meta);
          if (!jump) return;

          const lineCount = node.text_content === "" ? 0 : node.text_content.split("\n").length;
          if (jump.sourceLine > lineCount) {
            throw new Error(
              `line-jump source line ${jump.sourceLine} is beyond the fence's ${lineCount} lines`,
            );
          }
        } catch (cause) {
          const message = cause instanceof Error ? cause.message : String(cause);
          throw new Error(
            `${context.filename ?? "Markdown"}:${node.position.start.line}: ${message}`,
            { cause },
          );
        }
      };
    },
  },
};

/**
 * Keep the code and annotation overlays intact; only the gutter changes.
 * @param {string} meta
 * @param {import('mdsvex/highlight').RenderOptions} options
 * @returns {import('mdsvex/highlight').RenderOptions}
 */
export function renderLineJump(meta, options) {
  const jump = readLineJump(meta);
  if (!jump) return options;
  if (!options.line_numbers) {
    throw new Error("line-jump requires :line-numbers");
  }

  const start = typeof options.line_numbers === "object" ? (options.line_numbers.start ?? 1) : 1;
  let offset = 0;

  return {
    ...options,
    line_numbers: false,
    attributes: { ...options.attributes, "data-line-jump": jump.sourceLine },
    line(number, sourceLine) {
      const original = options.line?.(number, sourceLine);
      const atJump = sourceLine === jump.sourceLine;
      if (atJump) {
        offset = jump.displayLine - (start + number - 1);
        if (offset <= 0) throw new Error("line-jump must skip forward by at least one line");
      }

      const displayed = start + number - 1 + offset;
      if (!Number.isSafeInteger(displayed))
        throw new Error("line-jump exceeds safe integer numbering");

      return {
        ...original,
        attrs: {
          ...original?.attrs,
          "data-line-number": displayed,
          ...(atJump
            ? { "data-line-gap": `${offset} ${offset === 1 ? "line" : "lines"} omitted` }
            : {}),
        },
      };
    },
  };
}

/** @returns {import('vite').Plugin} */
export function lineJumpMarkup() {
  return {
    name: "line-jump-markup",
    enforce: "pre",
    transform(code, id) {
      if (!id.split("?")[0].endsWith(".md") || !code.includes("data-line-jump")) return;

      /** @type {{ position: number, text: string }[]} */
      const insertions = [];
      const ast = parse(code, { modern: true });
      visitElements(ast.fragment, (block) => {
        const sourceLine = attributeText(block, "data-line-jump");
        if (block.name !== "pre" || sourceLine === undefined) return;
        let gaps = 0;

        visitElements(block.fragment, (line) => {
          const number = attributeText(line, "data-line-number");
          if (line.name !== "span" || number === undefined) return;
          if (!/^\d+$/.test(number)) throw new Error(`${id}: invalid generated line number`);

          // These spans have explicit closing tags, including empty code lines.
          const position = line.fragment.nodes[0]?.start ?? line.end - "</span>".length;
          insertions.push({ position, text: `<span class="ln">${number}</span>` });

          const gap = attributeText(line, "data-line-gap");
          if (gap !== undefined) {
            if (!/^\d+ lines? omitted$/.test(gap))
              throw new Error(`${id}: invalid generated line gap`);
            insertions.push({
              position: line.start,
              text: `<span class="code-line-gap">${gap}</span>`,
            });
            gaps++;
          }
        });

        if (gaps !== 1) {
          throw new Error(`${id}: line-jump source line ${sourceLine} must be a visible code line`);
        }
      });

      if (insertions.length === 0) return;
      // Parse the template so source strings containing similar HTML stay untouched.
      for (const { position, text } of insertions.sort((a, b) => b.position - a.position)) {
        code = code.slice(0, position) + text + code.slice(position);
      }
      return { code, map: null };
    },
  };
}

/** @param {string} meta */
function readLineJump(meta) {
  const entries = fence_meta(`text ${meta}`).props.filter(([name]) => name === "line-jump");
  if (entries.length === 0) return;

  const value = entries[0][1];
  const match = typeof value === "string" && /^(\d+):(\d+)$/.exec(value);
  if (entries.length !== 1 || !match) {
    throw new Error('line-jump must appear once as "SOURCE:DISPLAY", for example "14:200"');
  }

  const sourceLine = Number(match[1]);
  const displayLine = Number(match[2]);
  if (
    !Number.isSafeInteger(sourceLine) ||
    sourceLine < 1 ||
    !Number.isSafeInteger(displayLine) ||
    displayLine < 1
  ) {
    throw new Error("line-jump requires positive safe integers");
  }

  return { sourceLine, displayLine };
}

/**
 * @param {import('svelte/compiler').AST.RegularElement} node
 * @param {string} name
 */
function attributeText(node, name) {
  const attribute = node.attributes.find((item) => item.type === "Attribute" && item.name === name);
  if (attribute?.type !== "Attribute" || !Array.isArray(attribute.value)) return;
  const value = attribute.value[0];
  if (attribute.value.length === 1 && value.type === "Text") return value.data;
}

/**
 * @param {unknown} value
 * @param {(node: import('svelte/compiler').AST.RegularElement) => void} visit
 */
function visitElements(value, visit) {
  if (!value || typeof value !== "object") return;
  if ("type" in value && value.type === "RegularElement") {
    visit(/** @type {import('svelte/compiler').AST.RegularElement} */ (value));
  }
  for (const child of Object.values(value)) visitElements(child, visit);
}
