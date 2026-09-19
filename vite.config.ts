import { sveltekit } from '@sveltejs/kit/vite';
import extractorSvelte from '@unocss/extractor-svelte';
import UnoCss from 'unocss/vite';
import { type UserConfig, lazyPlugins } from 'vite-plus';

import 'dotenv/config';

export default {
	// lint: {
	// 	jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
	// 	rules: { 'vite-plus/prefer-vite-plus-imports': 'error' },
	// 	options: { typeAware: true, typeCheck: true }
	// },
  fmt: {
    svelte: true,
	},
	staged: {
		'*.{js,ts,svelte,css,scss,json,jsonc,json5,yaml,yml,toml,html}': 'vp fmt --write'
	},
	plugins: lazyPlugins(() => [
		UnoCss({
			extractors: [extractorSvelte()]
		}),
		sveltekit()
	]),
	define: {
		'process.env.UNSPLASH_ACCESS_KEY': JSON.stringify(process.env.UNSPLASH_ACCESS_KEY)
	},
	server: {
		fs: {
			allow: ['.']
		}
	}
} satisfies UserConfig;
