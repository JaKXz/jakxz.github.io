import { redirect } from '@sveltejs/kit';
import { postsPerPage } from '$lib/config';
import fetchPosts from '$lib/assets/js/fetchPosts';

export async function load({ fetch, params }) {
	const page = params.page ? params.page : 1;

	// Keeps from duplicating the blog index route as page 1
	if (page <= 1) {
		throw redirect(301, '/blog');
	}

	let offset = page * postsPerPage - postsPerPage;

	const totalPosts = await fetch('/api/posts/count.json').then((res) => res.json());
	const { posts } = await fetchPosts({ offset, page });

	return {
		posts,
		page,
		totalPosts
	};
}
