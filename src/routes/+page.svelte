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
	<div class="leading-[1.1] my-12">
		<div class="name-heading first-name">Jason</div>
		<div class="name-heading text-right">Kurian</div>
		<code class="block text-center mt-5 mx-auto font-300 text-xl p-0">{siteDescription}</code>
	</div>

	<p>👋🏽 thanks for stopping by! My friends call me Jay, or JK.</p>
	<p>
		I'm a combination <a href="/resume">UX and Web Developer</a>, and sometimes touring or session
		keys player & music director.
	</p>
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
				class="border-rounded-2 transform transition duration-500 hover:scale-110 focus-within:scale-110 card"
			>
				<a href="/learning/{post.slug}" class="link-decoration-none">
					<div class="subdued">
						🔃
						{formatDate(post.updated)}
					</div>
					<div><strong>{post.title}</strong></div>
				</a>
				<div class="flex gap-4 my-4 mx-auto">
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
	section:not(:last-of-type) {
		@include vars.screen-height(90);
	}
	.name-heading {
		font-size: 5rem;

		&:first-letter {
			font-size: 6.5rem;
		}
	}
	.first-name {
		&:first-letter {
			letter-spacing: -3.6px;
		}
		@media (max-width: vars.$xsMin) {
			&:first-letter {
				padding-left: 1rem;
			}
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
