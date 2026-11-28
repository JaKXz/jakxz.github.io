import type { Post } from "#posts/types.ts";
import type { PageServerLoadEvent } from "./$types";

export async function load({ url, fetch }: PageServerLoadEvent) {
  const posts: Post[] = await fetch(`${url.origin}/api/posts.json`).then((res) => res.json());
  const total: number = await fetch(`${url.origin}/api/posts/count.json`).then((res) => res.json());

  return {
    posts,
    total,
    seoDescription:
      "Read Jason Kurian’s notes on React, CSS, testing, code review, pairing, and software career growth.",
  };
}
