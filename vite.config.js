import { sveltekit } from '@sveltejs/kit/vite';
import 'dotenv/config';

/** @type {import('vite').UserConfig} */
export default {
	plugins: [sveltekit()],
	define: {
		'process.env.UNSPLASH_ACCESS_KEY': JSON.stringify(process.env.UNSPLASH_ACCESS_KEY)
	}
};
