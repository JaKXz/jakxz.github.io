import fetchPosts from '$lib/assets/js/fetchPosts';
import { postsPerPage } from '$lib/config';
import { json } from '@sveltejs/kit';

export const prerender = true;

export async function GET() {
	const options = {
		limit: postsPerPage
	};

	const { posts } = await fetchPosts(options);
	return json(posts);
}
