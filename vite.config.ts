import { sveltekit } from "@sveltejs/kit/vite";
import extractorSvelte from "@unocss/extractor-svelte";
import UnoCss from "unocss/vite";
import { type UserConfig, lazyPlugins } from "vite-plus";

import "dotenv/config";

export default {
  define: {
    "process.env.UNSPLASH_ACCESS_KEY": JSON.stringify(process.env.UNSPLASH_ACCESS_KEY),
  },
  fmt: {
    svelte: true,
  },
  plugins: lazyPlugins(() => [
    UnoCss({
      extractors: [extractorSvelte()],
    }),
    sveltekit(),
  ]),
  staged: {
    "*.{js,ts,svelte,css,scss,json,jsonc,json5,yaml,yml,toml,html}": "vp fmt --write",
  },
  server: {
    fs: {
      allow: ["."],
    },
  },
} satisfies UserConfig;
