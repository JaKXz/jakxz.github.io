import fetchPosts from "$lib/assets/js/fetchPosts";

export async function load() {
  const { posts } = await fetchPosts({ limit: -1 });

  let uniqueCategories = {};

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
    uniqueCategories: Object.values(uniqueCategories).toSorted((a, b) => a.title > b.title),
    seoDescription:
      "Browse Jason Kurian’s learning notes by topic, from React and CSS to testing, Git, pairing, and career growth.",
  };
}
