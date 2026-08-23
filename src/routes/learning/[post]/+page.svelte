<script>
	import { siteLink, siteTitle } from '$lib/config';

	let { data } = $props();

	const {
		coverCaption,
		coverImage,
		coverWidth,
		coverHeight,
		categories,
		date,
		excerpt,
		imageAlt,
		title,
		updated
	} = data.meta;
</script>

<svelte:head>
	<title>{title} | {siteTitle}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={excerpt} />
	{#if coverImage}
		<meta property="og:image:width" content={coverWidth} />
		<meta property="og:image:height" content={coverHeight} />
		<meta property="og:image" content="{siteLink}{coverImage}" />
		<meta name="twitter:image" content="{siteLink}{coverImage}" />
		<meta name="twitter:card" content="summary_large_image" />
	{:else}
		<meta name="twitter:card" content="summary" />
	{/if}
</svelte:head>

<article class="post">
	{#if !!coverImage}
		<figure class="cover-image">
			<img
				src={coverImage}
				alt={imageAlt || ''}
				style="aspect-ratio: {coverWidth} / {coverHeight};"
				width={coverWidth}
				height={coverHeight}
			/>
			{#if !!coverCaption}
				<figcaption>
					Photo by
					<a
						target="_blank"
						rel="noopener noreferrer nofollow"
						href={`${coverCaption.authorUrl}?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`}
						>{coverCaption.author}</a
					>
					on
					<a
						target="_blank"
						rel="noopener noreferrer nofollow"
						href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
						>Unsplash</a
					>
				</figcaption>
			{:else if imageAlt}
				<figcaption>{imageAlt}</figcaption>
			{/if}
		</figure>
	{/if}
	<h1>{title}</h1>

	<div class="meta">
		<b>Published:</b>
		{date}
		<br />
		<b>Updated:</b>
		{updated}
	</div>

	<data.PostContent />

	<svelte:element
		this={"script"}
		src="https://utteranc.es/client.js"
		repo="jakxz/jakxz.github.io"
		issue-term="og:title"
		theme="preferred-color-scheme"
		crossorigin="anonymous"
		async
	/>

	{#if categories}
		<aside class="post-footer">
			<h2>Posted in:</h2>
			<ul>
				{#each categories as category (category)}
					<li>
						<a
							class="bg-[var(--lightAccent)] px-3 py-2 font-[var(--primaryFont)] font-800 uppercase dark:font-700"
							href="/learning/category/{category}/"
						>
							{category}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
</article>

<style>
	:global(.utterances-frame) {
		position: unset;
	}

	.post :global(h1:not(:first-child)) {
		margin: 1rem 0;
	}

	.post .meta {
		font-size: 0.8rem;
		margin-bottom: 4rem;
	}

	.post-footer ul {
		padding: 0;
	}

	.post-footer li {
		display: inline-block;
		font-size: 0.8rem;
	}

	.post-footer li + li {
		margin-left: 0.5rem;
	}

	.cover-image {
		display: flex;
		flex-flow: column;
		margin-inline: 0;
		margin-block: 0;
	}
</style>
