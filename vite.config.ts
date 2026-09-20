import { sveltekit } from "@sveltejs/kit/vite";
import extractorSvelte from "@unocss/extractor-svelte";
import UnoCss from "unocss/vite";
import { defineConfig, lazyPlugins } from "vite-plus";

export default defineConfig(({ mode }) => {
  return {
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
  };
});
