import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../../../lib/posts/${params.post}.md`);

		let coverCaption, imageAlt;
		if (post.metadata.coverImage?.includes('unsplash')) {
			const [, , id] = post.metadata.coverImage.split('-');
			const { alt_description, user } = await fetch(`https://api.unsplash.com/photos/${id}`, {
				headers: {
					Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
				}
			}).then((res) => res.json());
			imageAlt = alt_description;
			coverCaption = user
				? {
						author: user.name,
						authorUrl: user.links.html
				  }
				: null;
		}

		return {
			PostContent: post.default,
			meta: { ...post.metadata, slug: params.post, coverCaption, imageAlt }
		};
	} catch (err) {
		throw error(404, err);
	}
}
