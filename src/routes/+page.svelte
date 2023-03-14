<script>
	import { siteTitle, siteDescription } from '$lib/config';

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
	<div class="heading-container my-16 italic">
		<div class="name-heading first-name">Jason</div>
		<div class="name-heading text-right">Kurian</div>
		<code class="block text-center mt-5 mx-auto not-italic font-300 text-xl p-0"
			>{siteDescription}</code
		>
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
		><div class="i-tabler-brand-github vertical-sub" />
		GitHub</a
	>,&nbsp;
	<a target="_blank" rel="nofollow noopener noreferrer" href="https://twitter.com/jakxz92"
		><div class="i-tabler-brand-twitter vertical-sub" />
		Twitter</a
	>, or<br />
	<a target="_blank" rel="nofollow noopener noreferrer" href="https://www.linkedin.com/in/jgkurian/"
		><div class="i-tabler-brand-linkedin vertical-sub" />
		LinkedIn</a
	>.
</section>

<section>
	<h2>Recent Posts</h2>
	<div class="cards-grid">
		{#each data.posts as post (post.slug)}
			<div class="border-rounded-2">
				<a href="/learning/{post.slug}" class="link-decoration-none">
					<div class="subdued">{formatDate(post.updated)}</div>
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
	<p class="text-center"><a href="/learning">See all posts</a></p>
</section>

<style lang="scss">
	section {
		@include vars.screen-height(90);
	}
	.heading-container {
		line-height: 1.1;
	}
	.name-heading {
		font-size: 5rem;
		letter-spacing: -1px;

		&:first-letter {
			font-size: 6.5rem;
		}
	}
	.first-name {
		&:first-letter {
			letter-spacing: 4px;
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
			column-gap: 2rem;
			row-gap: 4rem;
			grid: auto-flow dense / 1fr 1fr;
		}
	}
	.subdued {
		color: var(--ink);
		opacity: 0.9;
	}
</style>
