import fetchPosts from "#assets/js/fetchPosts.js";
import { postsPerPage } from "#lib/config.js";

export async function GET() {
  const options = {
    limit: postsPerPage,
  };

  const { posts } = await fetchPosts(options);
  return Response.json(posts);
}
