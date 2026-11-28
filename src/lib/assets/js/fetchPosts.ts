import { postsPerPage } from "#lib/config.ts";
import type { Post, PostModule } from "#posts/types.ts";

interface FetchPostsOptions {
  offset?: number;
  limit?: number;
  category?: string;
  sort?: "date" | "updated" | "title" | ((a: Post, b: Post) => number);
}

export default async function fetchPosts({
  offset = 0,
  limit = postsPerPage,
  category = "",
  sort = "date",
}: FetchPostsOptions = {}) {
  const posts = await Promise.all(
    Object.entries(import.meta.glob<PostModule>("#posts/*.md")).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const slug = path.slice(path.lastIndexOf("/") + 1, -3);
      return { ...metadata, slug };
    }),
  );

  let sortedPosts =
    typeof sort === "function"
      ? posts.toSorted(sort)
      : posts.toSorted((a, b) => {
          const first = a[sort];
          const second = b[sort];
          return first == null || second == null ? 0 : second.localeCompare(first);
        });

  if (category) {
    sortedPosts = sortedPosts.filter((post) => post.categories.includes(category));
  }

  const total = sortedPosts.length;

  if (offset) {
    sortedPosts = sortedPosts.slice(offset);
  }

  if (limit && limit < sortedPosts.length && limit !== -1) {
    sortedPosts = sortedPosts.slice(0, limit);
  }

  return {
    posts: sortedPosts,
    total,
  };
}
