<script>
	import MainNav from './MainNav.svelte';
	import { siteAuthor } from '$lib/config';

	export let path;

	function getEditPath(url) {
		if (url.startsWith('/blog/')) {
			return `${url.replace('/blog', '/src/lib/posts')}.md`;
		}
		return (
			{
				'/': '/README.md',
				'/resume': '/src/routes/resume.md'
			}[url] || `/src/routes${url}.svelte`
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
		<p>&copy;{new Date().getFullYear()} {siteAuthor}</p>
		{#if path !== '/blog' && !path.startsWith('/blog/category/')}
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
