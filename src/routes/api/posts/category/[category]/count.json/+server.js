import { json } from '@sveltejs/kit';
import fetchPosts from '$lib/assets/js/fetchPosts';

export const prerender = true;

export async function GET({ params }) {
	const { category } = params;
	const { posts } = await fetchPosts({ category, limit: -1 });

	return json(posts.length);
}
