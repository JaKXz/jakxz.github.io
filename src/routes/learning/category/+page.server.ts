import fetchPosts from "#assets/js/fetchPosts.ts";

export async function load() {
  const { posts } = await fetchPosts({ limit: -1 });

  const uniqueCategories: Record<string, { title: string; count: number }> = {};

  posts.forEach((post) => {
    post.categories.forEach((category) => {
      if (category in uniqueCategories) {
        uniqueCategories[category].count += 1;
      } else {
        uniqueCategories[category] = {
          title: category,
          count: 1,
        };
      }
    });
  });

  return {
    uniqueCategories: Object.values(uniqueCategories).toSorted((a, b) =>
      a.title.localeCompare(b.title),
    ),
    seoDescription:
      "Browse Jason Kurian’s learning notes by topic, from React and CSS to testing, Git, pairing, and career growth.",
  };
}
