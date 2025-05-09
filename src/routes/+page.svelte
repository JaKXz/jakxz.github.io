<script>
	import { subtitles, siteTitle } from '$lib/config';
	import { slide } from 'svelte/transition';

	let { data } = $props();
	let index = $state(0);
	let [desc, subtitle] = $derived(subtitles[index]);

	function formatDate(date) {
		return new Intl.DateTimeFormat(undefined, {
			dateStyle: 'medium'
		}).format(new Date(`${date}T00:00:00`));
	}
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<section class="m-auto max-w-21rem min-h-100svh flex flex-col items-center justify-center">
	<div class="flex flex-col gap-8">
		<div class="text-center leading-[1.1]">
			<div class="name-heading first-name">Jason</div>
			<div class="name-heading">Kurian</div>
		</div>
		<button
			class="text-center cursor-pointer p-0 w-full reset-button"
			type="button"
			aria-label="Change subtitle"
			onclick={() => {
				index = (index + 1) % subtitles.length;
			}}
		>
			{#key index}
				<code class="block whitespace-pre p-0 text-xl font-300 border-none" transition:slide>
					{desc}<br />{subtitle}
				</code>
			{/key}
		</button>
		<p class="m-0">
			👋🏽 hey, thanks for stopping by! My friends call me Jay, or JK. Contact me on
			<a
				target="_blank"
				rel="nofollow noopener noreferrer"
				href="https://bsky.app/profile/jasonkurian.dev"
			>
				Bluesky</a
			>
			or
			<a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/jakxz">
				GitHub</a
			>.
		</p>
	</div>
</section>

<section class="m-auto min-h-100svh flex flex-col items-center justify-center">
	<div class="flex flex-col">
		<h2 class="xs:text-left text-center">Recent Posts</h2>
		<div class="cards-grid">
			{#each data.posts as post (post.slug)}
				<div
					class="card xs:transform xs:focus-within:scale-110 xs:hover:scale-110 border-rounded-2 transition duration-500"
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
	</div>
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

	.cards-grid:focus-within > .card:not(:global(:focus-within)),
	.cards-grid:hover > .card:not(:global(:hover)) {
		opacity: 0.5;
	}
</style>
