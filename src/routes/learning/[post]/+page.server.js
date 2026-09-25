import { UNSPLASH_ACCESS_KEY } from "$env/static/private";
import { error } from "@sveltejs/kit";
import { blurhashPlaceholder } from "$lib/server/blurhash-placeholder";

export async function load({ params, fetch }) {
  try {
    const post = await import(`../../../lib/posts/${params.post}.md`);
    let imageMeta = {};
    if (post.metadata.coverImage) {
      const [, , id] = post.metadata.coverImage.split("-");
      const { alt_description, user, blur_hash, errors } = await fetch(
        `https://api.unsplash.com/photos/${id}`,
        {
          headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
          },
        },
      )
        .then((res) => res.json())
        .catch((_networkError) => ({}));

      if (!process.env.CI && errors && errors.length) {
        throw new Error(`Unsplash error(s): ${errors.join(", ")}`);
      }

      imageMeta = {
        coverCaption: user
          ? {
              ...user,
              author: user.name,
              authorUrl: user.links.html,
            }
          : null,
        imageAlt: alt_description,
        imagePlaceholder: blurhashPlaceholder(blur_hash),
      };
    }
    return { imageMeta };
  } catch (err) {
    console.error(err.stack);
    if (err.message.toLowerCase().includes("unknown variable")) {
      throw error(404, err.message);
    } else {
      throw error(500, err.message);
    }
  }
}
