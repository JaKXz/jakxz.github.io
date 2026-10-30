import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from "rehype-slug";
import { scss } from "svelte-preprocess";
import { sveltekit } from "@sveltejs/kit/vite";
import extractorSvelte from "@unocss/extractor-svelte";
import unocss from "unocss/vite";
import devtoolsJson from "vite-plugin-devtools-json";
import { defineConfig, lazyPlugins } from "vite-plus";

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

        mdsvex({
          // The default mdsvex extension is .svx; this overrides that.
          extensions: [".md"],
          // Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
          rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeExternalLinks],
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
