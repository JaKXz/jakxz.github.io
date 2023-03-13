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

<section class="overview">
	<div class="heading-container">
		<div class="name-heading first-name">Jason</div>
		<div class="name-heading align-right">Kurian</div>
		<code class="subtitle">{siteDescription}</code>
	</div>

	<p>👋🏽 thanks for stopping by! My friends call me Jay, or JK.</p>
	<p>
		I'm a combination <a href="/resume">UX and Web Developer</a>, and sometimes touring or session
		keys player & music director.
	</p>
	<p>
		Contact me on <a
			target="_blank"
			rel="nofollow noopener noreferrer"
			href="https://github.com/jakxz">GitHub</a
		>
		or
		<a
			target="_blank"
			rel="nofollow noopener noreferrer"
			href="https://www.linkedin.com/in/jgkurian/">LinkedIn</a
		>.
	</p>
</section>

<section class="posts">
	<h2>Recent Posts</h2>
	<div class="cards">
		{#each data.posts as post (post.slug)}
			<a href="/learning/{post.slug}" class="card">
				<div class="subdued">{formatDate(post.updated)}</div>
				<div><strong>{post.title}</strong></div>
				<div class="gap-1">
					{#each post.categories as category (category)}
						<a href="/learning/category/{category}"><code class="lowercase">#{category}</code></a>
					{/each}
				</div>
			</a>
		{/each}
	</div>
	<p class="text-center"><a href="/learning">See all posts</a></p>
</section>

<section class="experience">
	<h2>Experience</h2>
</section>

<style lang="scss">
	section {
		@include vars.screen-height(90);
	}
	.overview {
		margin: auto;
		max-width: 21rem;
	}
	.heading-container {
		line-height: 1.1;
		margin-bottom: 2.5rem;
		position: relative;
		font-style: italic;
	}
	.name-heading {
		font-size: 5rem;
		letter-spacing: -1px;

		&:first-letter {
			font-size: 6.5rem;
		}
	}
	.first-name {
		@media (max-width: vars.$xsMin) {
			padding-left: 1rem;
		}
	}
	.subtitle {
		display: block;
		text-align: center;
		font-style: normal;
		font-weight: 300;
		font-size: 1.5rem;
		margin: 1.5rem auto;
		padding: 0.2rem;
	}
	.text-center {
		text-align: center;
	}
	.align-right {
		text-align: right;
	}
	.cards {
		display: grid;
		gap: 1rem;
		@media (min-width: vars.$xsMin) {
			column-gap: 2rem;
			row-gap: 4rem;
			grid: auto-flow dense / 1fr 1fr;
		}
	}
	.card {
		display: block;
		text-decoration: none;
		border-radius: 0.3rem;
	}
	.subdued {
		color: var(--white);
	}
	.gap-1 {
		display: flex;
		margin: 1rem auto;
		gap: 1rem;
	}
</style>
