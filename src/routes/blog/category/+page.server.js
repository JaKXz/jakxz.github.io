export async function load({ url }) {
	const posts = await fetch(`${url.origin}/api/posts.json?limit=-1`).then((res) => res.json());

	let uniqueCategories = {};

	posts.forEach((post) => {
		post.categories.forEach((category) => {
			if (uniqueCategories.hasOwnProperty(category)) {
				uniqueCategories[category].count += 1;
			} else {
				uniqueCategories[category] = {
					title: category,
					count: 1
				};
			}
		});
	});

	return {
		uniqueCategories: Object.values(uniqueCategories).sort((a, b) => a.title > b.title)
	};
}
