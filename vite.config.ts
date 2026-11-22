import adapter from "@sveltejs/adapter-static";
import { anchors } from "@mdsvex/plugin-anchors";
import { external_links } from "@mdsvex/plugin-external-links";
import { mdsvex } from "mdsvex";
import { scss } from "svelte-preprocess";
import { sveltekit } from "@sveltejs/kit/vite";
import extractorSvelte from "@unocss/extractor-svelte";
import unocss from "unocss/vite";
import devtoolsJson from "vite-plugin-devtools-json";
import { defineConfig, lazyPlugins } from "vite-plus";

import { lineJumpMarkup, validateLineJumps } from "#assets/js/markdown/line-jumps.js";
import { presentationDirectives, presentationMarkup } from "#assets/js/markdown/presentations.js";
import { calloutMarkup, codeHighlightOptions } from "#assets/js/markdown/callouts.js";

export default defineConfig(() => ({
  css: {
    devSourcemap: true,
  },
  fmt: {
    sortTailwindcss: {
      functions: ["classNames", "clsx"],
    },
    svelte: true,
  },
  plugins: lazyPlugins(() => [
    mdsvex({
      extensions: [".md"],
      components: "#assets/js/markdown/index.js",
      highlight: codeHighlightOptions(),
      parse_plugins: [validateLineJumps],
      heading_ids: true,
      smart_punctuation: true,
      plugins: [
        presentationDirectives,
        anchors(),
        external_links({ target: "_blank", new_tab_label: "opens in a new tab" }),
      ],
    }),
    lineJumpMarkup(),
    calloutMarkup(),
    presentationMarkup(),
    unocss({ extractors: [extractorSvelte()] }),
    sveltekit({
      // Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or used as pages)
      extensions: [".svelte", ".md"],
      preprocess: [
        scss({
          // Ensures Sass variables are always available inside component <style lang="scss"> blocks as vars.$variableDefinedInFile
          prependData: `@use 'src/lib/assets/scss/vars';`,
          silenceDeprecations: ["import", "mixed-decls", "global-builtin"],
        }),
      ],
      prerender: {
        entries: [
          "*",
          "/learning/page/*",
          "/learning/category/*",
          "/learning/category/*/page",
          "/learning/category/*/page/*",
        ],
      },
      adapter: adapter({ fallback: "404.html" }),
    }),
    devtoolsJson(),
  ]),
  staged: {
    "*.{js,ts,svelte,css,scss,json,jsonc,json5,yaml,yml,toml,html}": "vp fmt --write",
  },
  server: {
    fs: {
      allow: ["."],
    },
  },
}));
