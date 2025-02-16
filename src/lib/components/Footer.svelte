<script>
	import MainNav from './MainNav.svelte';

	let { path } = $props();

	function getEditPath(url) {
		if (url.startsWith('/learning/')) {
			return `${url.replace('/learning', '/src/lib/posts')}.md`;
		}
		return (
			{
				'/resume': '/src/routes/resume/+page.md'
			}[url] || `/src/routes${url}/+page.svelte`
		);
	}
</script>

<footer>
	<MainNav />

	<nav>
		<ul>
			<li>
				<a href="/api/rss.xml" rel="external">RSS</a>
			</li>
			<li>
				<a href="/">Home</a>
			</li>
		</ul>
	</nav>

	<div class="flex flex-col gap-1">
		{#if path !== '/learning' && !path.startsWith('/learning/category/')}
			<p>
				See a typo?
				<em>
					<a
						target="_blank"
						rel="nofollow noopener noreferrer"
						href={`https://github.com/jakxz/jakxz.github.io/edit/develop${getEditPath(path)}`}
					>
						Please open a PR here.</a
					>
				</em>
				Thank you!
			</p>
		{/if}
		<p>
			&copy;{new Date().getFullYear()} Jason Kurian
		</p>
		<p class="w-1/3 flex gap-4">
			<a class="text-xl" href="https://bsky.app/profile/jasonkurian.dev" aria-label="Bluesky">
				<svg
					viewBox="0 0 16 16"
					height="1.25rem"
					width="1.25rem"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.697-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948Z"
					/>
				</svg>
			</a>
			<a
				class="i-radix-icons-github-logo text-xl"
				href="https://github.com/jakxz"
				aria-label="GitHub"
			>
			</a>
			<a
				target="_blank"
				rel="nofollow noopener noreferrer"
				href="https://www.linkedin.com/in/jgkurian/"
				aria-label="LinkedIn"
			>
				<i class="i-radix-icons-linkedin-logo text-xl"></i>
			</a>
		</p>
	</div>
</footer>

<style>
</style>
