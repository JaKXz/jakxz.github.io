import { redirect } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";

export function GET({ params }: RequestEvent) {
  throw redirect(303, `/learning/category/${params.category}`);
}
