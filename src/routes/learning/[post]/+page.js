import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	try {
		const post = await import(`../../../lib/posts/${params.post}.md`);

		if (!post.metadata) {
			throw new Error(`${params.post} is missing meta, check the frontmatter`);
		}

		let imageMeta = {};
		if (post.metadata.coverImage) {
			const [, , id] = post.metadata.coverImage.split('-');
			const { alt_description, user, blur_hash } = await fetch(
				`https://api.unsplash.com/photos/${id}`,
				{
					headers: {
						Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
					}
				}
			)
				.then((res) => res.json())
				.catch(() => ({}));

			imageMeta = {
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

		return {
			PostContent: post.default,
			meta: {
				...post.metadata,
				slug: params.post,
				...imageMeta
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
