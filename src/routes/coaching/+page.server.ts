import { error } from "@sveltejs/kit";

import fetchPosts from "#assets/js/fetchPosts.ts";

export async function load() {
  try {
    const { posts } = await fetchPosts({
      category: "coaching",
      sort: "updated",
    });

    return {
      posts,
      seoDescription:
        "Personalized one-on-one coaching for software developers navigating their craft and career.",
    };
  } catch (err) {
    const cause = err instanceof Error ? err : new Error(String(err));
    console.error(cause.stack);
    throw error(500, cause.message);
  }
}
