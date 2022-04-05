import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
import preprocess from "svelte-preprocess";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import "dotenv/config";

/** @type {import('@sveltejs/kit').Config} */
export default {
  // Ensures both .svelte and .md files are treated as components (can be imported and used anywhere, or  used as pages)
  extensions: [".svelte", ".md"],

  preprocess: [
    preprocess({
      scss: {
        // Ensures Sass variables are always available inside component <style> blocks as vars.$variableDefinedInFile
        prependData: `@use 'src/lib/assets/scss/vars';`,
      },
    }),
    mdsvex({
      // The default mdsvex extension is .svx; this overrides that.
      extensions: [".md"],

      // Adds IDs to headings, and anchor links to those IDs. Note: must stay in this order to work.
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    }),
  ],

  kit: {
    adapter: adapter(),
    prerender: { default: true },

    // Allows reading from files in the root directory. Necessary for loading the README on the homepage, but nothing else.
    vite: {
      define: {
        "process.env.UNSPLASH_ACCESS_KEY": JSON.stringify(
          process.env.UNSPLASH_ACCESS_KEY
        ),
      },
      server: {
        fs: {
          allow: ["."],
        },
      },
    },
  },
};
