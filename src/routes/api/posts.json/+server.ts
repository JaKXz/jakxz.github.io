import fetchPosts from "#assets/js/fetchPosts.ts";
import { postsPerPage } from "#lib/config.ts";

export async function GET() {
  const options = {
    limit: postsPerPage,
  };

  const { posts } = await fetchPosts(options);
  return Response.json(posts);
}
