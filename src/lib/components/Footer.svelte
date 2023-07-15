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
		<p class="justify-between flex w-1/3">
			<a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/jakxz"
				><i class="i-radix-icons-github-logo text-xl" />
			</a>
			<a target="_blank" rel="nofollow noopener noreferrer" href="https://twitter.com/jakxz92"
				><i class="i-radix-icons-twitter-logo text-xl" />
			</a>
			<a
				target="_blank"
				rel="nofollow noopener noreferrer"
				href="https://www.linkedin.com/in/jgkurian/"
				><i class="i-radix-icons-linkedin-logo text-xl" />
			</a>
		</p>
	</div>
</footer>
