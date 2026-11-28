import fetchPosts from "#assets/js/fetchPosts.ts";
import { postsPerPage } from "#lib/config.ts";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoadEvent } from "./$types";

// server routes do not inherit prerender from layout:
// https://svelte.dev/docs/kit/page-options#prerender-Prerendering-server-routes
export const prerender = true;

export async function load({ params }: PageServerLoadEvent) {
  const { category } = params;
  const page = Number(params.page);

  // Prevents duplication of page 1 as the index page
  if (!Number.isSafeInteger(page) || page <= 1) {
    throw redirect(301, `/learning/category/${category}`);
  }

  const offset = (page - 1) * postsPerPage;

  const { posts, total: totalPosts } = await fetchPosts({ offset, category });

  return {
    posts,
    page,
    category,
    totalPosts,
    seoDescription: `Page ${page} of Jason Kurian’s ${category} learning notes and articles.`,
  };
}
