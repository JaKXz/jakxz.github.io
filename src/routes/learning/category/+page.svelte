<script>
	let { data } = $props();
	const { uniqueCategories } = data;
</script>

<svelte:head>
	<title>Blog | Categories</title>
</svelte:head>

<div class="compressed-content">
	<h1>All blog categories</h1>

	<ul>
		{#each uniqueCategories as category}
			<li>
				<a href="/learning/category/{category.title}">
					{category.title}
				</a>
				({category.count})
			</li>
		{/each}
	</ul>
</div>
