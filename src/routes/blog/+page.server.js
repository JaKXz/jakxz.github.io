export async function load({ url, fetch }) {
	const posts = await fetch(`${url.origin}/api/posts.json`).then((res) => res.json());
	const total = await fetch(`${url.origin}/api/posts/count.json`).then((res) => res.json());

	return { posts, total };
}
