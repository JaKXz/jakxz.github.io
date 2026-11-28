import fetchPosts from "#assets/js/fetchPosts.ts";
import { postsPerPage } from "#lib/config.ts";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoadEvent } from "./$types";

export async function load({ params }: PageServerLoadEvent) {
  const page = Number(params.page);

  // Keeps from duplicating the blog index route as page 1
  if (!Number.isSafeInteger(page) || page <= 1) {
    throw redirect(301, "/learning");
  }

  const offset = (page - 1) * postsPerPage;

  const { posts, total: totalPosts } = await fetchPosts({ offset });

  return {
    posts,
    page,
    totalPosts,
    seoDescription: `Page ${page} of Jason Kurian’s learning notes on web development, engineering practices, and career growth.`,
  };
}
