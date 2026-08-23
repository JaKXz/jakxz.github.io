<script>
	import { postsPerPage } from '$lib/config';

	/**
	 * @typedef {Object} Props
	 * @property {number} currentPage
	 * @property {number} totalPosts
	 * @property {string} [path]
	 */

	/** @type {Props} */
	let { currentPage, totalPosts, path = '/learning/page' } = $props();

	let pagesAvailable = $derived(Math.ceil(totalPosts / postsPerPage));

	const isCurrentPage = (page) => page == currentPage;
</script>

{#key currentPage}
	{#if pagesAvailable > 1}
		<nav aria-label="Pagination navigation">
			<ul>
				{#each Array.from({ length: pagesAvailable }, (_, i) => i + 1) as page (path + '/' + page)}
					<li>
						<a href="{path}/{page}" aria-current={isCurrentPage(page)}>
							<span class="sr-only">
								{#if isCurrentPage(page)}
									Current page:
								{:else}
									Go to page
								{/if}
							</span>
							{page}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
{/key}

<style>
	nav {
		margin: 0 0 1rem;
	}

	nav ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: start;
		list-style-type: none;
		gap: 0.5rem;
		margin: 0;
		padding: 0;
	}

	nav ul li {
		margin: 0;
	}

	nav ul a {
		background: var(--lightAccent);
		text-decoration: none;
		line-height: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2em;
		height: 2em;
		font-family: var(--primaryFont);
		font-weight: 800;
	}

	@media (prefers-color-scheme: dark) {
		nav ul a {
			font-weight: 700;
		}
	}

	nav ul a {
		transition: background 0.1s;
	}

	nav ul a:hover {
		background: var(--accent);
		color: var(--background);
	}

	nav ul a[aria-current='true'] {
		background: var(--accent);
		color: var(--background);
		border: 1px solid currentColor;
	}
</style>
