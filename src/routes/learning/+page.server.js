export async function load({ url, fetch }) {
  const posts = await fetch(`${url.origin}/api/posts.json`).then((res) => res.json());
  const total = await fetch(`${url.origin}/api/posts/count.json`).then((res) => res.json());

  return {
    posts,
    total,
    seoDescription:
      "Read Jason Kurian’s notes on React, CSS, testing, code review, pairing, and software career growth.",
  };
}
