import { error } from "@sveltejs/kit";

import fetchPosts from "$lib/assets/js/fetchPosts";

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
    console.error(err.stack);
    throw error(500, err.message);
  }
}
