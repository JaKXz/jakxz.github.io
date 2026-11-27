import { readFileSync } from "node:fs";
import { compile } from "mdsvex/compile";
import { create_highlight, load_default_languages } from "mdsvex/highlight";
import { render } from "svelte/server";
import { describe, expect, test } from "vite-plus/test";

import Essay from "#posts/write-react-components-like-an-essay.md";
import LineJumps from "../__fixtures__/line-jumps.md";
import { renderLineJump, validateLineJumps } from "./line-jumps.js";

test("places the essay's main export at line 200 in one code block", () => {
  const { body } = render(Essay);

  expect(body).toContain('<span class="ln">1</span>');
  expect(body).toContain('<span class="code-line-gap">186 lines omitted</span>');
  expect(body).toContain('<span class="ln">200</span><span class="tok keyword">export</span>');
  expect(body).toContain('<span class="ln">201</span>');
  expect(body.match(/<pre\b/g)).toHaveLength(2);
});

test("renders gap text and numbering with offsets, blank lines, focus, and diffs without JavaScript", () => {
  const { body } = render(LineJumps);

  expect(body).toContain('<span class="code-line-gap">189 lines omitted</span>');
  expect(body).toContain('class="l diff-add focus highlight"');
  expect(body).toContain('data-highlighted-line-id="target"');
  expect(body).toContain('data-line-number="200"');
  expect(body).toContain('<span class="ln">200</span><span class="tok keyword">const</span>');
  expect(body).toContain('<span class="ln">201</span></span>');
  expect(body).toContain('<span class="ln">202</span>');
  expect(body).toContain('class="l diff-del"');
  expect(body.match(/<span class="ln">10<\/span>/g)).toHaveLength(2);
  expect(body).not.toContain("[!focus");
  expect(body).not.toContain('<span class="ln">999</span>');
});

describe("line-jump compilation", async () => {
  const highlight = create_highlight({
    languages: await load_default_languages(),
    parse_meta: renderLineJump,
  });
  const options = { highlight, parse_plugins: [validateLineJumps], filename: "example.md" };

  test("preserves the clean copy text and literal HTML-like source", () => {
    const source = readFileSync(new URL("../__fixtures__/line-jumps.md", import.meta.url), "utf8");
    const expected =
      'const previous = 1;\nconst next = 2;\n\nconsole.log(next);\nconst markup = \'<span class="l" data-line-number="999">\';';

    const result = compile(source, {
      ...options,
      components: [{ specifier: "#assets/js/markdown/index.js", names: ["pre"] }],
    });

    expect(result.code).toContain(`code={${JSON.stringify(expected)}}`);
    expect(result.warnings).toBeUndefined();
  });

  test("labels a single omitted line correctly", () => {
    const source = '```ts :line-numbers line-jump="2:3"\nconst a = 1;\nconst b = 2;\n```';

    const result = compile(source, options);

    expect(result.code).toContain('data-line-gap="1 line omitted"');
    expect(result.code).toContain('data-line-number="3"');
  });

  test.each([
    ["line-jump", "must appear once"],
    ['line-jump="2.5:200" :line-numbers', "must appear once"],
    ['line-jump="-1:200" :line-numbers', "must appear once"],
    ['line-jump="2:200" line-jump="2:300" :line-numbers', "must appear once"],
    ['line-jump="0:200" :line-numbers', "positive safe integers"],
    ['line-jump="2:0" :line-numbers', "positive safe integers"],
    ['line-jump="2:9007199254740992" :line-numbers', "positive safe integers"],
    ['line-jump="3:200" :line-numbers', "source line 3 is beyond"],
    ['line-jump="2:1" :line-numbers', "skip forward"],
    ['line-jump="2:2" :line-numbers', "skip forward"],
    ['line-jump="2:10" :line-numbers=10', "skip forward"],
    ['line-jump="2:200"', "requires :line-numbers"],
    ['line-jump="2:200" :no-line-numbers', "requires :line-numbers"],
  ])("rejects %s with a fence location", (meta, message) => {
    const source = `# Example\n\n\`\`\`ts ${meta}\nconst a = 1;\nconst b = 2;\n\`\`\``;

    const compileInvalid = () => compile(source, options);

    expect(compileInvalid).toThrow(message);
    expect(compileInvalid).toThrow("example.md:3");
  });
});
