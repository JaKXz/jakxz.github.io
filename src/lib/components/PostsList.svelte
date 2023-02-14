<script>
	export let posts = [];
</script>

<ul class="posts-list">
	{#each posts as post}
		<li>
			<article>
				<p class="post-date">{new Date(`${post.date}T00:00:00`).toDateString()}</p>
				<a href="/learning/{post.slug}">
					<h3>
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

<style lang="scss">
	.posts-list {
		h3 {
			margin: 0 0 1rem;
		}

		margin-top: 0;
		list-style-type: none;
		padding: 0;

		li {
			margin-bottom: 6rem;
		}

		a {
			display: block;
		}
	}

	.post-date {
		margin: 0;
		font-size: 0.8rem;
		opacity: 0.9;
	}
</style>
