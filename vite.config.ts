import { sveltekit } from "@sveltejs/kit/vite";
import extractorSvelte from "@unocss/extractor-svelte";
import UnoCss from "unocss/vite";
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
    UnoCss({
      extractors: [extractorSvelte()],
    }),
    sveltekit(),
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
