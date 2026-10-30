export async function GET() {
  const posts = import.meta.glob(`#lib/posts/*.md`);

  return Response.json(Object.keys(posts).length);
}
