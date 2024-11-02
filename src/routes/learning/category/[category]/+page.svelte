<!-- Renders any page at /learning/category/* -->
<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Category: {data.category}</title>
</svelte:head>

<h1>Blog category: {data.category}</h1>

{#if data.posts.length}
	<PostsList posts={data.posts} />
	<Pagination
		currentPage="1"
		totalPosts={data.total}
		path="/learning/category/{data.category}/page"
	/>
{:else}
	<p><strong>Ope!</strong> Sorry, couldn't find any posts in the category "{data.category}".</p>

	<p><a href="/learning">Back to blog</a></p>
{/if}
