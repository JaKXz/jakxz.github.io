import { afterEach, describe, expect, test, vi } from "vite-plus/test";

import * as postLoader from "#assets/js/fetchPosts.ts";
import { postsPerPage } from "#lib/config.ts";
import { load as loadPage } from "./page/[page]/+page.server.ts";
import { load as loadCategoryPage } from "./category/[category]/page/[page]/+page.server.ts";
import { load as loadCategory } from "./category/[category]/+page.server.ts";
import { load as loadCategories } from "./category/+page.server.ts";

test("loads the second page with a numeric page and complete total", async () => {
  const all = await postLoader.default({ limit: -1 });
  const event = { params: { page: "2" } } as Parameters<typeof loadPage>[0];

  const result = await loadPage(event);

  expect(result.page).toBe(2);
  expect(result.posts).toEqual(all.posts.slice(postsPerPage, postsPerPage * 2));
  expect(result.totalPosts).toBe(all.total);
});

describe("category pagination", () => {
  afterEach(() => vi.restoreAllMocks());

  test("loads the second category page from only that category", async () => {
    const post = { title: "Last", slug: "last", date: "2026-01-01", categories: ["dev"] };
    const fetchPosts = vi
      .spyOn(postLoader, "default")
      .mockResolvedValue({ posts: [post], total: 11 });
    const event = { params: { page: "2", category: "dev" } } as Parameters<
      typeof loadCategoryPage
    >[0];

    const result = await loadCategoryPage(event);

    expect(result.page).toBe(2);
    expect(result.category).toBe("dev");
    expect(fetchPosts).toHaveBeenCalledWith({ offset: postsPerPage, category: "dev" });
    expect(result.posts).toEqual([post]);
    expect(result.totalPosts).toBe(11);
  });

  test("counts all category posts on its first page", async () => {
    const posts = Array.from({ length: postsPerPage }, (_, index) => ({
      title: `Post ${index}`,
      slug: `post-${index}`,
      date: "2026-01-01",
      categories: ["dev"],
    }));
    const fetchPosts = vi.spyOn(postLoader, "default").mockResolvedValue({ posts, total: 11 });
    const event = { params: { category: "dev" } } as Parameters<typeof loadCategory>[0];

    const result = await loadCategory(event);

    expect(result.posts).toHaveLength(postsPerPage);
    expect(fetchPosts).toHaveBeenCalledWith({ category: "dev" });
    expect(result.total).toBe(11);
    expect(result.total).toBeGreaterThan(result.posts.length);
  });
});

test.each(["1", "0", "-1", "abc", "2.5", "Infinity", "9007199254740992"])(
  "redirects page %s to the learning index",
  async (page) => {
    const event = { params: { page } } as Parameters<typeof loadPage>[0];

    const result = loadPage(event);

    await expect(result).rejects.toMatchObject({ status: 301, location: "/learning" });
  },
);

test.each(["1", "0", "-1", "abc", "2.5", "Infinity", "9007199254740992"])(
  "redirects category page %s to the category index",
  async (page) => {
    const event = { params: { page, category: "dev" } } as Parameters<typeof loadCategoryPage>[0];

    const result = loadCategoryPage(event);

    await expect(result).rejects.toMatchObject({ status: 301, location: "/learning/category/dev" });
  },
);

test("keeps the empty state after the final category page", async () => {
  const all = await postLoader.default({ category: "dev", limit: -1 });
  const event = { params: { page: "999", category: "dev" } } as Parameters<
    typeof loadCategoryPage
  >[0];

  const result = await loadCategoryPage(event);

  expect(result.posts).toEqual([]);
  expect(result.totalPosts).toBe(all.total);
});

describe("category directory", () => {
  afterEach(() => vi.restoreAllMocks());

  test("sorts category names alphabetically and counts posts", async () => {
    const fetchPosts = vi.spyOn(postLoader, "default").mockResolvedValue({
      posts: [
        { title: "First", slug: "first", date: "2026-01-02", categories: ["zebra", "apple"] },
        { title: "Second", slug: "second", date: "2026-01-01", categories: ["apple", "middle"] },
      ],
      total: 2,
    });

    const result = await loadCategories();

    expect(fetchPosts).toHaveBeenCalledWith({ limit: -1 });
    expect(result.uniqueCategories).toEqual([
      { title: "apple", count: 2 },
      { title: "middle", count: 1 },
      { title: "zebra", count: 1 },
    ]);
  });
});
