import { error, json } from '@sveltejs/kit';
import fetchPosts from '$lib/assets/js/fetchPosts';

export const prerender = true;

export async function GET({ params }) {
	const { category } = params;
	try {
		const { posts } = await fetchPosts({ category });

		return json(posts);
	} catch (err) {
		throw error(500, err);
	}
}
