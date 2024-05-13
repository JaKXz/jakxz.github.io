import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	try {
		const post = await import(`../../../lib/posts/${params.post}.md`);

		if (!post.metadata) {
			throw new Error(`${params.post} is missing meta, check the frontmatter`);
		}

		return {
			PostContent: post.default,
			meta: {
				...post.metadata,
				slug: params.post,
				...imageMeta(post.metadata.coverImage, fetch)
			}
		};
	} catch (err) {
		console.error(err.stack);
		if (err.message.toLowerCase().includes('unknown variable')) {
			throw error(404, err.message);
			// note the else block is needed because (as far as I can tell) this "throw"
			// doesn't terminate execution...
		} else {
			throw error(500, err.message);
		}
	}
}

async function imageMeta(coverImage, fetch) {
	if (!coverImage) return {};

	const [, , id] = coverImage.split('-');
	if (!id) return {};

	const { alt_description, user, blur_hash, errors } = await fetch(
		`https://api.unsplash.com/photos/${id}`,
		{
			headers: {
				Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
			}
		}
	)
		.then((res) => res.json())
		.catch((_networkError) => ({}));

	if (!process.env.CI && errors && errors.length) {
		throw new Error(`Unsplash error(s): ${errors.join(', ')}`);
	}

	return {
		coverCaption: user
			? {
					...user,
					author: user.name,
					authorUrl: user.links.html
				}
			: null,
		imageAlt: alt_description,
		imageBlurHash: blur_hash
	};
}
