import { redirect } from "@sveltejs/kit";

export function GET({ params }) {
  throw redirect(303, `/learning/category/${params.category}`);
}
