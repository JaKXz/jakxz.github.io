import { compile } from "mdsvex/compile";
import { compile as compileSvelte } from "svelte/compiler";
import { render } from "svelte/server";
import { expect, test } from "vite-plus/test";

import Examples from "../__fixtures__/code-presentations.md";
import DirectComponents from "../__fixtures__/code-components.svelte";
import { presentationDirectives, transformPresentations } from "./presentations.ts";

test("server-renders every tab and walkthrough step through the configured compiler", () => {
  const { body } = render(Examples);
  const text = body.replace(/<[^>]*>/g, "");

  expect(body).toContain("Package managers");
  expect(text).toContain("pnpm install");
  expect(text).toContain("npm install");
  expect(body).toContain("The helper appears before the export.");
  expect(body).toContain("The main export now comes first.");
  expect(body).toContain("First message");
  expect(body).toContain("Second message");
  expect(body).toContain('<span class="ln">200</span>');
  expect(body).toContain('class="l focus"');
  expect(body).toContain('class="l diff-add"');
  expect(body).toContain('role="note">Start with the main export</span>');
  expect(body).not.toContain("[!focus]");
  expect(body).not.toContain("hidden=");
  expect(body).not.toContain('role="tab"');
  expect(body.match(/<pre\b/g)).toHaveLength(6);
});

test("supports direct Svelte imports and gives repeated examples independent IDs", () => {
  const { body } = render(DirectComponents);
  const ids = Array.from(body.matchAll(/ id="([^"]+)"/g), (match) => match[1]);

  expect(body).toContain("Direct tabs");
  expect(body).toContain("Direct walkthrough");
  expect(body).toContain("Direct step");
  expect(body.match(/A direct example/g)).toHaveLength(3);
  expect(ids.length).toBeGreaterThan(0);
  expect(new Set(ids).size).toBe(ids.length);
});

test("preserves fence props and snippet labels across repeated compiler passes", () => {
  const source =
    ':::codeTabs(title="Files")\n\n```js [same.js] nocopy\nconst markup = "<CodeTabs_MDSVEX_D_G>";\n```\n\n```text [same.js]\n\n```\n\n:::';

  const markdown = compile(source, {
    plugins: [presentationDirectives],
    components: [{ specifier: "#assets/js/markdown/index.ts", names: ["pre"] }],
  });
  const first = transformPresentations(markdown.code);
  const second = transformPresentations(first);
  const client = compileSvelte(second, { generate: "client" });
  const server = compileSvelte(second, { generate: "server" });

  expect(second).toBe(first);
  expect(second).toContain('title:"same.js",code:');
  expect(second).toContain("nocopy={true}");
  expect(second).toContain('code={""}');
  expect(client.warnings).toEqual([]);
  expect(server.warnings).toEqual([]);
});

test.each([
  [":::codeTabs\n\n```js [a.js]\nx\n```\n\n:::", "requires a nonempty title"],
  [':::codeTabs(title="Files")\n\n```js\nx\n```\n\n:::', "fence requires a title"],
  [':::codeTabs(title="Files")\n\nParagraph\n\n:::', "only fenced code"],
  [':::codeTabs(title="Files")\n:::', "must not be empty"],
  [':::codeStep(title="Orphan")\nText\n\n```js\nx\n```\n:::', "directly inside"],
  [':::codeWalkthrough(title="Story", mode="automatic")\n:::', "mode must be"],
  [':::codeWalkthrough(title="Story")\nParagraph\n:::', "only codeStep"],
  [
    '::::codeWalkthrough(title="Story")\n:::codeStep(title="Missing code")\nText\n:::\n::::',
    "one code fence",
  ],
  [
    '::::codeWalkthrough(title="Story")\n:::codeStep(title="Missing prose")\n```js\nx\n```\n:::\n::::',
    "requires an explanation",
  ],
  [
    '::::codeTabs(title="Outer")\n:::codeTabs(title="Inner")\n```js [a.js]\nx\n```\n:::\n::::',
    "Nested code presentation",
  ],
])("rejects malformed presentation %s at its source", (source, message) => {
  const compileInvalid = () =>
    compile(source, {
      filename: "invalid-presentation.md",
      plugins: [presentationDirectives],
    });

  expect(compileInvalid).toThrow(message);
  expect(compileInvalid).toThrow("invalid-presentation.md:");
});
