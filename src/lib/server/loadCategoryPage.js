import fetchPosts from "$lib/assets/js/fetchPosts";
import { postsPerPage } from "$lib/config";

export default async function loadCategoryPage({ category, page = 1 }) {
  const { posts } = await fetchPosts({ category, limit: -1 });
  const offset = (page - 1) * postsPerPage;

  return {
    category,
    page,
    posts: posts.slice(offset, offset + postsPerPage),
    totalPosts: posts.length,
    seoDescription:
      page === 1
        ? `Browse Jason Kurian’s ${category} learning notes about software development and engineering practices.`
        : `Page ${page} of Jason Kurian’s ${category} learning notes and articles.`,
  };
}
