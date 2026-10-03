import loadCategoryPage from "$lib/server/loadCategoryPage";
import { redirect } from "@sveltejs/kit";

// server routes do not inherit prerender from layout:
// https://svelte.dev/docs/kit/page-options#prerender-Prerendering-server-routes
export const prerender = true;

export async function load({ params }) {
  const { category } = params;
  const page = Number(params.page);

  console.log({ page });

  // Prevents duplication of page 1 as the index page
  if (!Number.isSafeInteger(page) || page <= 1) {
    throw redirect(301, `/learning/category/${category}`);
  }

  return loadCategoryPage({ category, page });
}
