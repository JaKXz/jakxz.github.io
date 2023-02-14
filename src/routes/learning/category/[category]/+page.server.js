import fetchPosts from '$lib/assets/js/fetchPosts';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
	const { category } = params;

	if (category === 'page') {
		throw redirect(303, '/learning/category');
	}

	const { posts } = await fetchPosts({ category });

	return {
		posts,
		category,
		total: posts.length
	};
}
