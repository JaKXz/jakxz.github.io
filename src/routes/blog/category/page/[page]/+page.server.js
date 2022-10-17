import fetchPosts from '$lib/assets/js/fetchPosts';
import { postsPerPage } from '$lib/config';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
	const page = params.page || 1;

	// Keeps from duplicating the blog index route as page 1
	if (page <= 1) {
		throw redirect(301, '/blog');
	}

	let offset = page * postsPerPage - postsPerPage;

	const { posts } = await fetchPosts({ offset, page });

	return {
		posts,
		page,
		totalPosts: posts.length
	};
}
