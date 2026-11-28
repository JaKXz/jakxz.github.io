import { error } from "@sveltejs/kit";
import fetchPosts from "#assets/js/fetchPosts.ts";

export async function load() {
  try {
    const { posts } = await fetchPosts({ limit: 4, sort: "updated" });
    return {
      posts,
    };
  } catch (err) {
    const cause = err instanceof Error ? err : new Error(String(err));
    console.error(cause.stack);
    throw error(500, cause.message);
  }
}
