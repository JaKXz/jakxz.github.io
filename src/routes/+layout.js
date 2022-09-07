import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load({ url }) {
	try {
		return {
			path: url.pathname
		};
	} catch (err) {
		throw error(500, err);
	}
}
