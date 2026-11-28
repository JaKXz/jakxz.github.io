export async function GET() {
  const posts = import.meta.glob(`#posts/*.md`);

  return Response.json(Object.keys(posts).length);
}
