import fetchPosts from '$lib/assets/js/fetchPosts';

export async function load({ params, url }) {
	const { category } = params;
	const { posts } = await fetchPosts({ category });
	const total = await fetch(`${url.origin}/api/posts/category/${category}/count.json`).then((res) =>
		res.json()
	);

	return {
		posts,
		category,
		total
	};
}
