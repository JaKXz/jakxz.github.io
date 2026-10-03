import loadCategoryPage from "$lib/server/loadCategoryPage";
import { redirect } from "@sveltejs/kit";

// server routes do not inherit prerender from layout:
// https://svelte.dev/docs/kit/page-options#prerender-Prerendering-server-routes
export const prerender = true;

export async function load({ params }) {
  const { category } = params;

  if (category === "page") {
    throw redirect(303, "/learning/category");
  }

  return loadCategoryPage({ category });
}
