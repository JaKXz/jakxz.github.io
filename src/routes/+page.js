import { error } from '@sveltejs/kit';
import fetchPosts from '$lib/assets/js/fetchPosts';

export async function load() {
	try {
		const { posts } = await fetchPosts({ limit: 4, sort: 'updated' });
		return {
			posts
		};
	} catch (err) {
		console.error(err.stack);
		throw error(500, err.message);
	}
}
