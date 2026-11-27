import { readFileSync } from "node:fs";
import { compile } from "mdsvex/compile";
import { create_highlight, load_default_languages } from "mdsvex/highlight";
import { render } from "svelte/server";
import { expect, test } from "vite-plus/test";

import CodeBlocks from "../__fixtures__/code-blocks.md";

test("renders rich fences through the configured mdsvex and Svelte components", () => {
  const { body } = render(CodeBlocks);

  expect(body).toContain("Example.tsx");
  expect(body).toContain("A highlighted component");
  expect(body).toContain('class="tok keyword"');
  expect(body).toContain('class="ln">10</span>');
  expect(body).toContain('class="l diff-del highlight"');
  expect(body).toContain('class="l diff-add"');
  expect(body).toContain('class="l focus"');
  expect(body).toContain("highlighted-word");
  expect(body).not.toContain("[!focus]");
  expect(body).toContain('class="tok selector_class"');
  expect(body).toContain('class="tok property"');
});

test("renders literal and empty code without JavaScript or an active copy button", () => {
  const { body } = render(CodeBlocks);

  expect(body).toContain("&lt;script>{literal}&lt;/script>");
  expect(body).toContain("  plain text");
  expect(body).toContain('<code><span class="l"></span></code>');
  expect(body).toContain('role="region"');
  expect(body).toContain('tabindex="0"');
  expect(body).toContain('aria-label="Example.tsx"');
  expect(body).not.toContain("<button");
  expect(body.match(/<pre\b/g)).toHaveLength(5);
  expect(body.match(/class="[^"]*\bcode-block\b[^"]*"/g)).toHaveLength(5);
});

test("passes clean copy text separately from highlighted markup", async () => {
  const source = readFileSync(new URL("../__fixtures__/code-blocks.md", import.meta.url), "utf8");
  const highlight = create_highlight({
    languages: { ...(await load_default_languages()), scss: "css" },
  });
  const expectedCode =
    'const previous = 1;\nconst next = 2;\nexport const App = () => <div>{"<&>"}</div>;';

  const result = compile(source, {
    highlight,
    components: [{ specifier: "#assets/js/markdown/index.js", names: ["pre"] }],
  });

  expect(result.code).toContain(`code={${JSON.stringify(expectedCode)}}`);
  expect(result.code).toContain('code={"  plain text"}');
  expect(result.code).toContain('code={""}');
  expect(result.warnings).toEqual([expect.objectContaining({ code: "unknown_language" })]);
});

test("reports an invalid highlight range at its source fence", async () => {
  const highlight = create_highlight({ languages: await load_default_languages() });
  const source = "```ts {9}\nconst value = 1;\n```";

  const compileInvalidFence = () => compile(source, { highlight, filename: "invalid.md" });

  expect(compileInvalidFence).toThrow("line 9 is beyond the fence's 1 line");
});
