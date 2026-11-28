import { UNSPLASH_ACCESS_KEY } from "$app/env/private";
import { error } from "@sveltejs/kit";
import { blurhashPlaceholder } from "#server/blurhash-placeholder.ts";
import type { PostModule } from "#posts/types.ts";
import type { PageServerLoadEvent } from "./$types";

interface UnsplashPhoto {
  alt_description?: string | null;
  user?: { name: string; links: { html: string } };
  blur_hash?: string | null;
  errors?: string[];
}

interface ImageMetadata {
  coverCaption?: { author: string; authorUrl: string } | null;
  imageAlt?: string | null;
  imagePlaceholder?: string | null;
}

export async function load({ params, fetch }: PageServerLoadEvent) {
  try {
    const post: PostModule = await import(`#posts/${params.post}.md`);
    let imageMeta: ImageMetadata = {};
    if (post.metadata.coverImage) {
      const [, , id] = post.metadata.coverImage.split("-");

      const { alt_description, user, blur_hash, errors } = await fetch(
        `https://api.unsplash.com/photos/${id}`,
        {
          headers: { Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}` },
        },
      )
        .then((res): Promise<UnsplashPhoto> => res.json())
        .catch((): UnsplashPhoto => ({}));

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
    const cause = err instanceof Error ? err : new Error(String(err));
    console.error(cause.stack);
    if (cause.message.toLowerCase().includes("unknown variable")) {
      throw error(404, cause.message);
    } else {
      throw error(500, cause.message);
    }
  }
}
