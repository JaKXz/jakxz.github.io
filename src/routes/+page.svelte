<script>
	import { siteDescription, siteTitle } from '$lib/config';

	export let data;

	function formatDate(date) {
		return new Intl.DateTimeFormat(undefined, {
			dateStyle: 'medium'
		}).format(new Date(`${date}T00:00:00`));
	}
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<section class="m-auto max-w-21rem">
	<div class="my-12 leading-[1.1]">
		<div class="name-heading first-name">Jason</div>
		<div class="name-heading text-right">Kurian</div>
		<code class="mx-auto mt-5 block p-0 text-center text-xl font-300">{siteDescription}</code>
	</div>

	<p>👋🏽 thanks for stopping by! My friends call me Jay, or JK.</p>
	Contact me on&nbsp;<a
		target="_blank"
		rel="nofollow noopener noreferrer"
		href="https://github.com/jakxz"
	>
		GitHub</a
	>,
	<a target="_blank" rel="nofollow noopener noreferrer" href="https://twitter.com/jakxz92">
		Twitter</a
	>, or
	<a
		target="_blank"
		rel="nofollow noopener noreferrer"
		href="https://www.linkedin.com/in/jgkurian/"
	>
		LinkedIn</a
	>.
</section>

<section>
	<h2>Recent Posts</h2>
	<div class="cards-grid">
		{#each data.posts as post (post.slug)}
			<div
				class="card transform border-rounded-2 transition duration-500 focus-within:scale-110 hover:scale-110"
			>
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
	</div>
	<p class="text-center"><a href="/learning">See all entries</a></p>
</section>

<style lang="scss">
	.name-heading {
		font-size: 5rem;
		letter-spacing: -1px;

		&:first-letter {
			font-size: 6.5rem;
			letter-spacing: normal;
		}
	}
	.first-name::first-letter {
		letter-spacing: 0.025em;
		@media (max-width: vars.$xsMin) {
			padding-left: 1rem;
		}
	}
	.cards-grid {
		display: grid;
		gap: 1rem;
		@media (min-width: vars.$xsMin) {
			margin-top: 2rem;
			gap: 2rem;
			grid: auto-flow dense / 1fr 1fr;
		}
	}
	.cards-grid:focus-within > .card:not(:focus-within),
	.cards-grid:hover > .card:not(:hover) {
		opacity: 0.5;
	}
</style>
