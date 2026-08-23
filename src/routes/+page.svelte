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
			class="mt-0 w-full cursor-pointer border-none bg-transparent p-0 text-center hover:bg-transparent focus:bg-transparent active:bg-transparent"
			type="button"
			aria-label="Change subtitle"
			onclick={() => {
				index = (index + 1) % subtitles.length;
			}}
		>
			{#key index}
				<code class="block whitespace-pre border-none p-0 text-xl font-300" transition:slide>
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
		<h2 class="text-center xs:text-left">Recent Posts</h2>
		<div class="cards-grid">
			{#each data.posts as post (post.slug)}
				<div
					class="card border-rounded-2 transition duration-200 xs:transform xs:focus-within:scale-101 xs:hover:scale-101"
				>
					<a href="/learning/{post.slug}" class="link-decoration-none">
						<p class="m-0 opacity-90 text-xs text-[color:var(--ink)]">
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

<style>
	.name-heading {
		font-size: 5rem;
		letter-spacing: -1px;
	}

	.name-heading::first-letter {
		font-size: 6.5rem;
		letter-spacing: normal;
	}

	.first-name::first-letter {
		letter-spacing: 0.025em;
	}

	.cards-grid {
		display: grid;
		gap: 1rem;
	}

	.cards-grid:focus-within > .card:not(:global(:focus-within)),
	.cards-grid:hover > .card:not(:global(:hover)) {
		opacity: 0.75;
	}

	@media (max-width: 600px) {
		.first-name::first-letter {
			padding-left: 1rem;
		}
	}

	@media (min-width: 600px) {
		.cards-grid {
			margin-top: 2rem;
			gap: 2rem;
			grid: auto-flow dense / 1fr 1fr;
		}
	}
</style>
