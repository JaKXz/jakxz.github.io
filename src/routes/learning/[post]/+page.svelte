<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	export let data;

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
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content={excerpt} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>

<article class="post">
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
	<h1>{title}</h1>

	<div class="meta">
		<b>Published:</b>
		{date}
		<br />
		<b>Updated:</b>
		{updated}
	</div>

	<svelte:component this={data.PostContent} />

	{#if categories}
		<aside class="post-footer">
			<h2>Posted in:</h2>
			<ul>
				{#each categories as category}
					<li>
						<a href="/learning/category/{category}/">
							{category}
						</a>
					</li>
				{/each}
			</ul>
		</aside>
	{/if}
</article>

<style lang="scss">
	.post {
		h1 {
			margin: 1rem 0;
		}

		.meta {
			font-size: 0.8rem;
			margin-bottom: 4rem;
		}
	}

	.post-footer {
		ul {
			padding: 0;
		}

		li {
			display: inline-block;
			font-size: 0.8rem;

			a {
				background-color: var(--lightAccent);
				padding: 0.5rem 0.75rem;
				text-transform: uppercase;
				font-family: var(--primaryFont);
				font-weight: bold;
			}

			+ li {
				margin-left: 0.5rem;
			}
		}
	}

	.cover-image {
		display: flex;
		flex-flow: column;
		margin-inline: 0;
		margin-block: 0;

		figcaption {
			background: var(--paper);
			font-style: italic;
			font-size: smaller;
			padding: 3px;
			text-align: center;
		}
	}
</style>
