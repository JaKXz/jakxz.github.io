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
		<p class="grid grid-cols-2 gap-4 w-1/2">
			<a
				class="i-radix-icons-globe text-xl"
				href="https://bsky.app/profile/jasonkurian.dev"
				aria-label="Bluesky"
			>
			</a>
			<a
				class="i-radix-icons-github-logo text-xl"
				href="https://github.com/jakxz"
				aria-label="GitHub"
			>
			</a>
			<!-- <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.linkedin.com/in/jgkurian/" aria-label="LinkedIn">
				<i class="i-radix-icons-linkedin-logo text-xl"></i>
			</a> -->
		</p>
	</div>
</footer>

<style>
</style>
