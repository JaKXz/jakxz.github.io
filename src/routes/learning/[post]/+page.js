import { error } from "@sveltejs/kit";
import { siteTitle } from "$lib/config";

export async function load({ params, data }) {
  const { imageMeta } = data;
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
        ...imageMeta,
      },
      seoDescription:
        post.metadata.seoDescription?.trim() ||
        post.metadata.excerpt?.trim() ||
        `${post.metadata.title} — a learning note by ${siteTitle}.`,
    };
  } catch (err) {
    console.error(err.stack);
    if (err.message.toLowerCase().includes("unknown variable")) {
      throw error(404, err.message);
    } else {
      throw error(500, err.message);
    }
  }
}
