<script>
	import MainNav from './MainNav.svelte';

	export let path;

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

	<div>
		<p>&copy;{new Date().getFullYear()} Jason Kurian</p>
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
	</div>
</footer>
