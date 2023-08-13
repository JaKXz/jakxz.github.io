<script>
	export let posts = [];
	function formatDate(date) {
		return new Intl.DateTimeFormat(undefined, {
			dateStyle: 'medium'
		}).format(new Date(`${date}T00:00:00`));
	}
</script>

<h2>Writing</h2>

{#each posts as post (post.slug)}
	<div>
		<a href="/learning/{post.slug}" class="link-decoration-none">
			<p class="subdued m-0">
				🔃
				{formatDate(post.updated)}
			</p>
			<p class="my-1"><strong>{post.title}</strong></p>
		</a>
		<div class="mx-auto my-4 flex gap-4">
			{#each post.categories as category (category)}
				<a href="/learning/category/{category}"><code>#{category}</code></a>
			{/each}
		</div>
	</div>
{/each}
