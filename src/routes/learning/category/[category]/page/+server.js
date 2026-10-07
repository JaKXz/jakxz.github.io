import { redirect } from "@sveltejs/kit";

// server routes do not inherit prerender from layout:
// https://svelte.dev/docs/kit/page-options#prerender-Prerendering-server-routes
export const prerender = true;

export function GET({ params }) {
  throw redirect(303, `/learning/category/${params.category}`);
}
