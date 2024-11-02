<script>
	let { posts = [] } = $props();
</script>

<ul class="mt-0 list-none p-0">
	{#each posts as post (post.slug)}
		<li class="mb-24">
			<article>
				<div class="subdued">
					📝
					{new Date(`${post.date}T00:00:00`).toDateString()}
				</div>
				<a class="block" href="/learning/{post.slug}">
					<h3 class="mt-1">
						{post.title}
					</h3>
				</a>
				{#if post.excerpt != null}
					<p>{post.excerpt}</p>
				{/if}
			</article>
		</li>
	{/each}
</ul>
