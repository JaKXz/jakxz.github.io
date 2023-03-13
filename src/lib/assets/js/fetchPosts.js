import { postsPerPage } from '$lib/config';

export default async function fetchPosts({
	offset = 0,
	limit = postsPerPage,
	category = '',
	sort = 'date'
} = {}) {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('../../posts/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.split('/').pop().slice(0, -3);
			return { ...metadata, slug };
		})
	);

	let sortedPosts =
		sort instanceof Function
			? posts.sort(sort)
			: posts.sort((a, b) => b[sort] != null && b[sort].localeCompare(a[sort]));

	if (category) {
		sortedPosts = sortedPosts.filter((post) => post.categories.includes(category));
	}

	if (offset) {
		sortedPosts = sortedPosts.slice(offset);
	}

	if (limit && limit < sortedPosts.length && limit !== -1) {
		sortedPosts = sortedPosts.slice(0, limit);
	}

	return {
		posts: sortedPosts
	};
}
