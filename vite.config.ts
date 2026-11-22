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

import {
  lineJumpMarkup,
  renderLineJump,
  validateLineJumps,
} from "./src/lib/markdown/line-jumps.js";

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
      // The default mdsvex extension is .svx; this overrides that.
      extensions: [".md"],
      components: "#lib/markdown.js",
      highlight: { languages: { scss: "css" }, parse_meta: renderLineJump },
      parse_plugins: [validateLineJumps],
      heading_ids: true,
      smart_punctuation: true,
      plugins: [
        anchors(),
        external_links({ target: "_blank", new_tab_label: "opens in a new tab" }),
      ],
    }),
    lineJumpMarkup(),
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
