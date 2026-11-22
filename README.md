Built with [SvelteKit](https://kit.svelte.dev/), [Vite+](https://viteplus.dev/), [UnoCSS](https://unocss.dev/), [mdsvex](https://mdsvex.com/), and others & folks' fantastic work!

## Code blocks

Fenced code is highlighted at build time by mdsvex's bundled Twinkleplop highlighter.
Colours follow the site's theme. Every block has a language label, an optional filename
and caption, and a copy button after JavaScript loads. Code remains readable and
keyboard-scrollable without JavaScript.

````md
```ts [settings.ts] caption="Choose the new theme" :line-numbers {3}
const theme = "light"; // [!del]
const theme = "dark"; // [!add]
saveTheme(theme); // [!focus]
```
````

| Feature         | Fence metadata or comment                                  |
| --------------- | ---------------------------------------------------------- |
| Filename        | `[settings.ts]` or `title="settings.ts"`                   |
| Caption         | `caption="Explanation"`                                    |
| Line numbers    | `:line-numbers`, `:line-numbers=10`, or `:no-line-numbers` |
| Highlight lines | `{1,3-5}` in fence metadata, or `// [!hl]` on a line       |
| Highlight words | `/theme/` in fence metadata                                |
| Focus lines     | `// [!focus]` on the lines to emphasize                    |
| Diff lines      | `// [!add]`, `// [!del]`, or `// [!mod]`                   |

Numbering and annotations are opt-in. Annotation markers belong in the language's
comment syntax and disappear from rendered and copied code. Copy includes all displayed
code, including deleted lines, without line numbers or diff signs. Invalid highlight
ranges fail the build with the fence's location.

Use captions for short explanations or the existing `#components/Callout.svelte`
component beside a fence for longer notes. Inline callout annotations, tabs, and animated
walkthroughs are not implemented.

Unlabelled or unknown languages render as plain code; unknown languages also produce a
build warning. `sh` and `bash` are bundled. `scss` uses the bundled CSS tokenizer, which
handles the existing nested CSS examples but does not implement the full Sass grammar.

Run `pnpm run check`, `pnpm run test --run`, and `pnpm run build` for automated validation.
Manually check theme switching, clipboard success/failure, mobile overflow, keyboard
scrolling, no-JavaScript rendering, and the article minimap in the browser.
