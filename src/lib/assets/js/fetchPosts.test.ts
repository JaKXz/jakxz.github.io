import { expect, test } from "vite-plus/test";

import { postsPerPage } from "#lib/config.ts";

import fetchPosts from "./fetchPosts.ts";

test("returns a promise", () => {
  expect(fetchPosts()).toBeInstanceOf(Promise);
});

test("sorts by date descending by default", async () => {
  const { posts } = await fetchPosts();

  expect(new Date(posts[0].date).valueOf()).toBeGreaterThan(new Date(posts[1].date).valueOf());
});

test("takes a sort function", async () => {
  const { posts } = await fetchPosts({
    sort: (a, b) => a.title.localeCompare(b.title),
  });

  expect(posts[0].title).toMatch(/^A/);
});

test("takes a sort string and sorts descending", async () => {
  const { posts } = await fetchPosts({
    sort: "title",
  });

  expect(posts[posts.length - 1].title).toMatch(/^A/);
});

test("returns a specified category", async () => {
  const { posts: allPosts } = await fetchPosts({ limit: -1 });

  const { posts } = await fetchPosts({
    category: "testing",
  });

  expect(posts.length).toBeGreaterThan(0);
  expect(posts.length).toBeLessThan(allPosts.length);
  posts.forEach((post) => {
    expect(post.categories).toContain("testing");
  });
});

test(`returns up to ${postsPerPage} posts by default`, async () => {
  const { posts } = await fetchPosts();

  expect(posts.length).toBeLessThanOrEqual(postsPerPage);
});

test("returns a specified number of posts", async () => {
  const { posts } = await fetchPosts({
    limit: 1,
  });

  expect(posts.length).toBe(1);
});

test("returns a specified number of posts starting at an offset", async () => {
  const { posts: allPosts } = await fetchPosts({ limit: -1 });

  const { posts } = await fetchPosts({
    offset: 1,
    limit: 1,
  });

  expect(posts.length).toBe(1);
  expect(posts[0].title).toBe(allPosts[1].title);
});

test("counts category posts before applying the offset and limit", async () => {
  const all = await fetchPosts({ category: "dev", limit: -1 });

  const result = await fetchPosts({ category: "dev", offset: 1, limit: 1 });

  expect(result.posts).toEqual([all.posts[1]]);
  expect(result.total).toBe(all.posts.length);
  expect(result.total).toBeGreaterThan(result.posts.length);
});

test("returns an empty category with a zero total", async () => {
  const result = await fetchPosts({ category: "nonexistent-category" });

  expect(result).toEqual({ posts: [], total: 0 });
});

test("preserves the total beyond the last page", async () => {
  const all = await fetchPosts({ limit: -1 });

  const result = await fetchPosts({ offset: all.total });

  expect(result).toEqual({ posts: [], total: all.total });
});
