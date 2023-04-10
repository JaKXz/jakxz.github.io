import { sveltekit } from '@sveltejs/kit/vite';
import extractorSvelte from '@unocss/extractor-svelte';
import UnoCss from 'unocss/vite';

import 'dotenv/config';

/** @type {import('vite').UserConfig} */
export default {
	plugins: [
		UnoCss({
			extractors: [extractorSvelte],
			theme: {
				breakpoints: {
					xs: '600px',
					sm: '768px',
					md: '1024px',
					lg: '1280px',
					xl: '1440px',
					xxl: '1680px',
					xxxl: '1960px'
				}
			}
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
};
