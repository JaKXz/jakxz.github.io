import { render } from "svelte/server";
import { expect, test } from "vite-plus/test";

import { postsPerPage } from "$lib/config";

import CategoryPostsPage from "./CategoryPostsPage.svelte";

test.each([
  { page: 1, count: postsPerPage, title: "Learning category: dev", start: 1 },
  { page: 2, count: 2, title: "Learning category dev - page 2", start: postsPerPage + 1 },
])(
  "renders the category heading, range, and pagination on page $page",
  ({ page, count, title, start }) => {
    const posts = Array.from({ length: count }, (_, index) => ({
      slug: `note-${index}`,
      title: `Note ${index}`,
      date: "2026-01-01",
    }));
    const totalPosts = postsPerPage + 2;

    const result = render(CategoryPostsPage, {
      props: { category: "dev", posts, page, totalPosts },
    });
    const body = result.body.replace(/<!--.*?-->/gs, "");

    expect(result.head).toContain(title);
    expect(body).toContain("<h1>dev</h1>");
    expect(body).toContain('href="/learning/category"');
    expect(body).toContain(`Notes ${start}–${start + count - 1} of ${totalPosts}`);
    expect(body.match(/aria-label="Pagination navigation"/g)).toHaveLength(2);
    expect(body.match(/<article\b/g)).toHaveLength(count);
    expect(body).toContain(`href="/learning/category/dev/page/${page}" aria-current="true"`);
  },
);

test("hides pagination for a single-page category", () => {
  const posts = [{ slug: "note", title: "Note", date: "2026-01-01" }];

  const result = render(CategoryPostsPage, {
    props: { category: "dev", posts, page: 1, totalPosts: 1 },
  });
  const body = result.body.replace(/<!--.*?-->/gs, "");

  expect(body).toContain("Notes 1–1 of 1");
  expect(body).not.toContain('aria-label="Pagination navigation"');
});

test("keeps category context without a range or pagination for an unknown category", () => {
  const result = render(CategoryPostsPage, {
    props: { category: "unknown", posts: [], page: 1, totalPosts: 0 },
  });
  const body = result.body.replace(/<!--.*?-->/gs, "");

  expect(body).toContain("<h1>unknown</h1>");
  expect(body).toContain("I couldn't find any notes in the category “unknown”.");
  expect(body).toContain('href="/learning/category"');
  expect(body).toContain('href="/learning"');
  expect(body).not.toContain("Notes ");
  expect(body).not.toContain('aria-label="Pagination navigation"');
});

test("links back to the category on a page beyond its last post", () => {
  const result = render(CategoryPostsPage, {
    props: { category: "dev", posts: [], page: 3, totalPosts: postsPerPage + 2 },
  });
  const body = result.body.replace(/<!--.*?-->/gs, "");

  expect(body).toContain("<h1>dev</h1>");
  expect(body).toContain("I couldn't find any notes on page 3 of “dev”.");
  expect(body).toContain('href="/learning/category/dev"');
  expect(body).toContain('href="/learning/category"');
  expect(body).not.toContain("Notes ");
  expect(body).not.toContain('aria-label="Pagination navigation"');
});
