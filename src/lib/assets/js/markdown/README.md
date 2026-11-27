## Code blocks

Fenced code is highlighted at build time by mdsvex's bundled Twinkleplop highlighter.
Colours follow the site's theme. Every block has a language label, an optional filename
and caption, and a copy button after JavaScript loads unless the fence includes `nocopy`.
Code remains readable and keyboard-scrollable without JavaScript.

````md
```ts [settings.ts] caption="Choose the new theme" :line-numbers {3}
const theme = "light"; // [!del]
const theme = "dark"; // [!add]
saveTheme(theme); // [!focus]
```
````

| Feature          | Fence metadata or comment                                  |
| ---------------- | ---------------------------------------------------------- |
| Filename         | `[settings.ts]` or `title="settings.ts"`                   |
| Caption          | `caption="Explanation"`                                    |
| Hide copy button | `nocopy` in fence metadata                                 |
| Line numbers     | `:line-numbers`, `:line-numbers=10`, or `:no-line-numbers` |
| Highlight lines  | `{1,3-5}` in fence metadata, or `// [!hl]` on a line       |
| Highlight words  | `/theme/` in fence metadata                                |
| Focus lines      | `// [!focus]` on the lines to emphasize                    |
| Diff lines       | `// [!add]`, `// [!del]`, or `// [!mod]`                   |

Numbering and annotations are opt-in. Annotation markers belong in the language's
comment syntax and disappear from rendered and copied code. Copy includes all displayed
code, including deleted lines, without line numbers or diff signs. Invalid highlight
ranges fail the build with the fence's location.

### Omitted lines

Use one `line-jump="SOURCE:DISPLAY"` option with line numbers enabled to simulate
omitted code. `SOURCE` counts authored lines inside the fence, starting at 1;
`DISPLAY` is the number to show on that line and continue from:

````md
```ts [example.ts] :line-numbers line-jump="3:200"
import { helper } from "./helper";
// Supporting code...
export function main() {
  return helper();
}
```
````

This shows lines 1–2, a "197 lines omitted" separator, then line 200. Copy still
returns only the authored code, without synthetic filler or separator text. The
numbers and separator render without JavaScript.

Highlight ranges such as `{3}` still refer to authored source lines, not displayed
numbers. Keep the source position up to date when editing the example, and target
a visible line rather than an annotation-only line. Jumps must skip forward, use
positive integers, and point inside the fence; invalid options fail the build with
the file and fence location. Ordinary `:line-numbers=10` offsets also work with jumps.

Use captions for short explanations or the existing `#components/Callout.svelte`
component beside a fence for longer notes.

### Inline callouts

Add a persistent note below a line using the language's comment syntax:

````md
```ts [total.ts] :line-numbers
const total = left + right; // [!callout The total includes both values]
const doubled = total * 2; // [!callout =total | Reuse the total]
// [!callout ="left + right" | Add the values]
const sum = left + right;
```
````

`[!callout Explanation]` describes the whole line.
`[!callout =name | Explanation]` highlights every occurrence of the literal target on that line.
Quote targets containing spaces, as in `="left + right"`.
A trailing marker targets its own line; a standalone marker targets the immediately following code line.
Put consecutive notes on the same comment line so their target remains visible.
Notes are plain text, so HTML and Svelte expressions display literally.
Use the annotation syntax's `\]` escape for a closing bracket inside a message.
Multiple notes on a line appear in author order.
Empty messages, missing targets, malformed target syntax, and standalone markers without a visible following line produce source-located mdsvex warnings.

Notes render without JavaScript and work alongside focus, diffs, and line jumps.
The copy button returns code without notes, annotation comments, gutters, or omitted-line separators.
Annotation-looking text inside a string remains ordinary code.

### Tabs

Group ordinary fences using a native mdsvex directive:

````md
:::codeTabs(title="Package managers")

```sh [pnpm] nocopy
pnpm install
```

```sh [npm]
npm install
```

:::
````

The group needs a title, and every fence needs a filename or `title` for its tab label.
Only code fences belong directly inside a tab group.
All examples render in order until JavaScript enhances them into tabs.
Arrow keys and Home/End move between tabs; the selected tab stays within the horizontally scrollable strip.
Each fence keeps its own copy setting, caption, and annotations.
Where the browser supports searching hidden content, Find in Page reveals and selects a matching panel.

### Walkthroughs

Each step contains explanatory Markdown followed by one code fence:

````md
::::codeWalkthrough(title="Put the main export first", mode="click")

:::codeStep(title="Before")

The helper comes before the entry point.

```ts [profile.ts] :line-numbers
const helper = () => 1;
export const Profile = () => helper(); // [!callout =Profile | The main export]
```

:::

:::codeStep(title="After")

Start with the code the reader came to find.

```ts [profile.ts] :line-numbers
export const Profile = () => helper(); // [!focus]
const helper = () => 1;
```

:::

::::
````

`mode="click"` is the default and shows Previous/Next controls and a step count.
`mode="scroll"` places the explanations beside sticky code and selects steps at the viewport midpoint.
Below `48rem`, scroll mode becomes click-through.
Automatic changes pause while the code panel has keyboard focus or a text selection.

Matching source lines move between steps; additions and removals fade.
Matching includes indentation and pairs repeated lines in occurrence order.
Line numbers and notes do not affect identity.
Reduced motion disables animations, and browsers without the Web Animations API switch immediately.
All explanations and code remain readable in document order without JavaScript.
Nested presentation groups and token-level animation are not supported.

### Direct Svelte imports

The directives compile to separately importable components; they do not highlight code in the browser.
`CodeTabs` accepts `title` and `items: { title, code: Snippet }[]`.
`CodeWalkthrough` accepts `title`, optional `mode`, and `steps: { title, content: Snippet, code: Snippet }[]`.
`CodeStep` accepts `title`, a `children` snippet for the explanation, and an optional `code` snippet.

For example, with `before.md` and `after.md` each containing a single ordinary code fence:

```svelte
<script>
  import CodeTabs from "#components/CodeTabs.svelte";
  import CodeWalkthrough from "#components/CodeWalkthrough.svelte";
  import Before from "./before.md";
  import After from "./after.md";
</script>

{#snippet before()}<Before />{/snippet}
{#snippet after()}<After />{/snippet}
{#snippet introduction()}<p>Start with the original layout.</p>{/snippet}
{#snippet conclusion()}<p>Move the main export first.</p>{/snippet}

<CodeTabs
  title="Compare"
  items={[
    { title: "Before", code: before },
    { title: "After", code: after },
  ]}
/>

<CodeWalkthrough
  title="Reorder the file"
  steps={[
    { title: "Before", content: introduction, code: before },
    { title: "After", content: conclusion, code: after },
  ]}
/>
```

Unlabelled or unknown languages render as plain code; unknown languages also produce a
build warning. `sh` and `bash` are bundled. `scss` uses the bundled CSS tokenizer, which
handles the existing nested CSS examples but does not implement the full Sass grammar.

Run `pnpm run check`, `pnpm run test --run`, and `pnpm run build` for automated validation.
Manually check theme switching, clipboard success/failure, mobile overflow, keyboard
scrolling, no-JavaScript rendering, and the article minimap in the browser.

The fixtures in `../__fixtures__/code-presentations.md` and `code-callouts.md` exercise the new authoring syntax.
For manual checks, use their examples in a local draft:

- Navigate tabs with the keyboard, including an overflowing tab strip, and search for text in another panel.
- Move rapidly through walkthrough steps; check reordered, repeated, blank, added, and removed lines.
- Scroll forward and backward through a scroll-mode walkthrough, including jumping past multiple steps.
- Focus or select text in the code panel while scrolling; it should stay available until you leave it.
- Resize across `48rem`, enable reduced motion, and check the light and dark themes.
- Check each active example's caption, copy text, `nocopy` setting, callouts, and simulated line numbers.
- Disable JavaScript and confirm every example and explanation remains readable.
- Place multiple groups in one article and confirm independent selection, animations, and minimap entries.
