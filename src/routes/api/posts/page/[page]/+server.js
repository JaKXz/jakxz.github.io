import { json } from '@sveltejs/kit';
import { postsPerPage } from '$lib/config';
import fetchPosts from '$lib/assets/js/fetchPosts';

export const prerender = true;

export async function GET({ params }) {
	const { page } = params || 1;

	const options = {
		offset: (page - 1) * postsPerPage,
		limit: postsPerPage
	};

	const { posts } = await fetchPosts(options);

	return json(posts);
}
