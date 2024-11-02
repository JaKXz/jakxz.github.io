<script>
	import Pagination from '$lib/components/Pagination.svelte';
	import PostsList from '$lib/components/PostsList.svelte';
	import { siteTitle, siteDescription } from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>{siteTitle} | Learning</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<PostsList posts={data.posts} />

<Pagination currentPage={1} totalPosts={data.total} />
