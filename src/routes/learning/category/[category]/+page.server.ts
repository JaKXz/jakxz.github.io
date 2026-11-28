import fetchPosts from "#assets/js/fetchPosts.ts";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoadEvent } from "./$types";

// server routes do not inherit prerender from layout:
// https://svelte.dev/docs/kit/page-options#prerender-Prerendering-server-routes
export const prerender = true;

export async function load({ params }: PageServerLoadEvent) {
  const { category } = params;

  if (category === "page") {
    throw redirect(303, "/learning/category");
  }

  const { posts, total } = await fetchPosts({ category });

  return {
    posts,
    category,
    total,
    seoDescription: `Browse Jason Kurian’s ${category} learning notes about software development and engineering practices.`,
  };
}
