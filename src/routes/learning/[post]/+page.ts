import { error } from "@sveltejs/kit";
import { siteTitle } from "#lib/config.ts";
import type { PostModule } from "#posts/types.ts";
import type { PageLoadEvent } from "./$types";

export async function load({ params, data }: PageLoadEvent) {
  const { imageMeta } = data;
  try {
    const post: PostModule = await import(`#posts/${params.post}.md`);

    if (!post.metadata) {
      throw new Error(`${params.post} is missing meta, check the frontmatter`);
    }

    return {
      PostContent: post.default,
      meta: {
        ...post.metadata,
        slug: params.post,
        ...imageMeta,
      },
      seoDescription:
        post.metadata.seoDescription?.trim() ||
        post.metadata.excerpt?.trim() ||
        `${post.metadata.title} — a learning note by ${siteTitle}.`,
    };
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
