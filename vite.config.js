import UnoCss from 'unocss/vite';
import { extractorSvelte } from 'unocss';
import { sveltekit } from '@sveltejs/kit/vite';
import 'dotenv/config';

/** @type {import('vite').UserConfig} */
export default {
	plugins: [UnoCss({ extractors: [extractorSvelte] }), sveltekit()],
	define: {
		'process.env.UNSPLASH_ACCESS_KEY': JSON.stringify(process.env.UNSPLASH_ACCESS_KEY)
	},
	server: {
		fs: {
			allow: ['.']
		}
	}
};
