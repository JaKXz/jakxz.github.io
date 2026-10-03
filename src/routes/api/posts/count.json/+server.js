import { json } from "@sveltejs/kit";

export async function GET() {
  const posts = import.meta.glob(`$lib/posts/*.md`);

  return json(Object.keys(posts).length);
}
