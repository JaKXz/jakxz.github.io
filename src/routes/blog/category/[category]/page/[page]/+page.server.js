import { redirect } from '@sveltejs/kit';
import { postsPerPage } from '$lib/config';
import fetchPosts from '$lib/assets/js/fetchPosts';

export async function load({ url, params }) {
	const page = params.page ? params.page : 1;
	const { category } = params;

	// Prevents duplication of page 1 as the index page
	if (page <= 1) {
		throw redirect(301, `/blog/category/${category}`);
	}

	let offset = page * postsPerPage - postsPerPage;

	const totalPosts = await fetch(`${url.origin}/api/posts/count.json`).then((res) => res.json());
	const { posts } = await fetchPosts({ offset, page });

	return {
		posts,
		page,
		category,
		totalPosts
	};
}
