import fetchPosts from '$lib/assets/js/fetchPosts';

export async function load({ params }) {
	const { category } = params;
	const { posts } = await fetchPosts({ category });

	return {
		posts,
		category,
		total: posts.length
	};
}
