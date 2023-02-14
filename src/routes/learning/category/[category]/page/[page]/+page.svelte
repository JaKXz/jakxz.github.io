<!-- Renders posts listed by category -->
<script>
	import Pagination from '$lib/components/Pagination.svelte';
	import PostsList from '$lib/components/PostsList.svelte';
	import { postsPerPage, siteDescription } from '$lib/config';

	export let data;
	const { page, category, totalPosts, posts } = data;

	$: lowerBound = page * postsPerPage - (postsPerPage - 1) || 1;
	$: upperBound = Math.min(page * postsPerPage, totalPosts);
</script>

<svelte:head>
	<title>Blog category {category} - page {page}</title>
	<meta data-key="description" name={siteDescription} />
</svelte:head>

<!-- TODO: this is duplicated across multiple `+page.svelte` files -->
{#if posts && posts.length}
	<h1>
		Category: {category}
		<br />
		<small>Posts {lowerBound}–{upperBound} of {totalPosts}</small>
	</h1>
	<Pagination currentPage={page} {totalPosts} path="/learning/category/{category}/page" />

	<PostsList {posts} />

	<Pagination currentPage={page} {totalPosts} path="/learning/category/{category}/page" />
{:else}
	<h1>Oops!</h1>

	<p>Sorry, no posts to show here.</p>

	<a href="/learning">Back to blog</a>
{/if}
