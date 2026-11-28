import { readFileSync } from "node:fs";
import { compile } from "mdsvex/compile";
import { create_highlight, load_default_languages } from "mdsvex/highlight";
import { render } from "svelte/server";
import { describe, expect, test } from "vite-plus/test";

import Callouts from "../__fixtures__/code-callouts.md";
import { codeHighlightOptions, transformCallouts } from "./callouts.ts";

test("renders escaped line and word notes with numbering and native annotations", () => {
  const { body } = render(Callouts);

  expect(body).toContain('role="note">The first value</span>');
  expect(body).toContain("Use the name twice");
  expect(body.match(/class="tok code-callout-target"/g)).toHaveLength(3);
  expect(body).toContain('<span class="ln">200</span>');
  expect(body).toContain("&lt;b>{value}&lt;/b> &amp;");
  expect(body).toContain('"quotes" array]</span>');
  expect(body).toContain("[!callout leave this string alone]");
  expect(body).toContain("A CSS target");
  expect(body).toContain("Install packages");
  expect(body).not.toContain("[!focus]");
  expect(body).not.toContain("data-code-callouts");
  expect(body.match(/role="note"/g)).toHaveLength(5);
});

describe("callout compilation", async () => {
  const highlight = create_highlight({
    ...codeHighlightOptions(),
    languages: await load_default_languages(),
  });

  test("keeps copy text clean and notes isolated between fences", () => {
    const source = readFileSync(
      new URL("../__fixtures__/code-callouts.md", import.meta.url),
      "utf8",
    );

    const result = compile(source, {
      highlight,
      components: [{ specifier: "#assets/js/markdown/index.ts", names: ["pre"] }],
    });
    const firstPass = transformCallouts(result.code);
    const secondPass = transformCallouts(firstPass);

    expect(result.code).toContain(
      'code={"const name = \\"Ada\\";\\nexport const message = name + name;',
    );
    expect(result.code).toContain('code={"const name = \\"No note here\\";"}');
    expect(result.warnings).toBeUndefined();
    expect(secondPass).toBe(firstPass);
    expect(firstPass.match(/role="note"/g)).toHaveLength(5);
  });

  test("supports a quoted expression and multiple notes on the same visible line", () => {
    const source =
      '```js\n// [!callout ="left + right" | Add both]\nconst sum = left + right; // [!callout First] [!callout Second]\n```';

    const result = compile(source, { highlight });
    const output = transformCallouts(result.code);

    expect(result.warnings).toBeUndefined();
    expect(output.match(/class="tok code-callout-target"/g)).toHaveLength(1);
    expect(output).toContain(
      'role="note">Add both</span><span class="code-note" role="note">First</span><span class="code-note" role="note">Second</span>',
    );
  });

  test.each([
    ["const n = 1; // [!callout]", "nonempty explanation"],
    ["const n = 1; // [!callout =missing | Explain]", "matched zero occurrences"],
    ["const n = 1; // [!callout =n]", "Use [!callout"],
    ["// [!callout Nowhere]", "following code line"],
    ["// [!callout First]\n// [!callout Second]\nconst n = 1;", "must target a visible code line"],
    ["// [!callout First]\n// [!focus]\nconst n = 1;", "must target a visible code line"],
  ])("reports invalid callout %s at the source fence", (code, message) => {
    const source = `# Example\n\n\`\`\`js\n${code}\n\`\`\``;

    const result = compile(source, { highlight, filename: "callout.md" });

    expect(result.warnings).toEqual([
      expect.objectContaining({
        code: "annotation",
        message: expect.stringContaining(message),
        start: { line: 3, column: 0 },
      }),
    ]);
  });
});
