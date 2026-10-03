import { afterEach, expect, test, vi } from "vite-plus/test";

import * as postsModule from "$lib/assets/js/fetchPosts";
import { postsPerPage } from "$lib/config";

import { load as loadCategoryIndex } from "./+page.server";
import { load as loadFirstPage } from "./[category]/+page.server";
import { GET as redirectPageDirectory } from "./[category]/page/+server";
import { load as loadNumberedPage } from "./[category]/page/[page]/+page.server";

afterEach(() => {
  vi.restoreAllMocks();
});

test("paginates a category with a shared total and no overlapping posts", async () => {
  const posts = Array.from({ length: postsPerPage + 2 }, (_, index) => ({
    slug: `note-${index}`,
    categories: ["dev"],
  }));
  vi.spyOn(postsModule, "default").mockResolvedValue({ posts });

  const firstPage = await loadFirstPage({ params: { category: "dev" } });
  const secondPage = await loadNumberedPage({ params: { category: "dev", page: "2" } });

  expect(postsModule.default).toHaveBeenCalledTimes(2);
  expect(postsModule.default).toHaveBeenNthCalledWith(1, { category: "dev", limit: -1 });
  expect(postsModule.default).toHaveBeenNthCalledWith(2, { category: "dev", limit: -1 });
  expect(firstPage).toMatchObject({
    category: "dev",
    page: 1,
    posts: posts.slice(0, postsPerPage),
    totalPosts: posts.length,
    seoDescription:
      "Browse Jason Kurian’s dev learning notes about software development and engineering practices.",
  });
  expect(secondPage).toMatchObject({
    category: "dev",
    page: 2,
    posts: posts.slice(postsPerPage),
    totalPosts: posts.length,
    seoDescription: "Page 2 of Jason Kurian’s dev learning notes and articles.",
  });
});

test.each([1, postsPerPage])("returns all %i posts in a single-page category", async (count) => {
  const posts = Array.from({ length: count }, (_, index) => ({ slug: `note-${index}` }));
  vi.spyOn(postsModule, "default").mockResolvedValue({ posts });

  const result = await loadFirstPage({ params: { category: "dev" } });

  expect(result).toMatchObject({ category: "dev", page: 1, posts, totalPosts: count });
});

test.each(["1", "0", "-1", "2.5", "invalid", "2notes", "NaN", "Infinity", "9007199254740992"])(
  "redirects page %s to the first category page before loading posts",
  async (page) => {
    vi.spyOn(postsModule, "default").mockResolvedValue({ posts: [] });

    const result = loadNumberedPage({ params: { category: "dev", page } });

    await expect(result).rejects.toMatchObject({ status: 301, location: "/learning/category/dev" });
    expect(postsModule.default).not.toHaveBeenCalled();
  },
);

test("returns empty results with category context for unknown categories", async () => {
  vi.spyOn(postsModule, "default").mockResolvedValue({ posts: [] });

  const firstPage = await loadFirstPage({ params: { category: "unknown" } });
  const secondPage = await loadNumberedPage({ params: { category: "unknown", page: "2" } });

  expect(firstPage).toMatchObject({ category: "unknown", page: 1, posts: [], totalPosts: 0 });
  expect(secondPage).toMatchObject({ category: "unknown", page: 2, posts: [], totalPosts: 0 });
});

test("preserves the category total on pages beyond the last post", async () => {
  const posts = Array.from({ length: postsPerPage + 2 }, (_, index) => ({ slug: `note-${index}` }));
  vi.spyOn(postsModule, "default").mockResolvedValue({ posts });

  const result = await loadNumberedPage({ params: { category: "dev", page: "3" } });

  expect(result).toMatchObject({ category: "dev", page: 3, posts: [], totalPosts: posts.length });
});

test("redirects the reserved page category to the category index", async () => {
  vi.spyOn(postsModule, "default").mockResolvedValue({ posts: [] });

  const result = loadFirstPage({ params: { category: "page" } });

  await expect(result).rejects.toMatchObject({ status: 303, location: "/learning/category" });
  expect(postsModule.default).not.toHaveBeenCalled();
});

test("redirects the page directory to the first category page", () => {
  const result = () => redirectPageDirectory({ params: { category: "dev" } });

  expect(result).toThrow(
    expect.objectContaining({ status: 303, location: "/learning/category/dev" }),
  );
});

test("counts every post and includes categories found beyond the first page", async () => {
  const posts = Array.from({ length: postsPerPage + 1 }, () => ({ categories: ["dev"] }));
  posts.push({ categories: ["testing"] });
  vi.spyOn(postsModule, "default").mockResolvedValue({ posts });

  const result = await loadCategoryIndex();

  expect(postsModule.default).toHaveBeenCalledExactlyOnceWith({ limit: -1 });
  expect(result.uniqueCategories).toHaveLength(2);
  expect(result.uniqueCategories).toEqual(
    expect.arrayContaining([
      { title: "dev", count: postsPerPage + 1 },
      { title: "testing", count: 1 },
    ]),
  );
});
