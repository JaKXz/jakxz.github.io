import { sveltekit } from '@sveltejs/kit/vite';
import extractorSvelte from '@unocss/extractor-svelte';
import UnoCss from 'unocss/vite';
import { type UserConfig } from 'vite';

import 'dotenv/config';

export default {
	plugins: [
		UnoCss({
			extractors: [extractorSvelte()]
		}),
		sveltekit()
	],
	define: {
		'process.env.UNSPLASH_ACCESS_KEY': JSON.stringify(process.env.UNSPLASH_ACCESS_KEY)
	},
	server: {
		fs: {
			allow: ['.']
		}
	}
} satisfies UserConfig;
