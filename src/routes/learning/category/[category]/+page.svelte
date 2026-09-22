<!-- Renders any page at /learning/category/* -->
<script>
  import PostsList from "$lib/components/PostsList.svelte";
  import Pagination from "$lib/components/Pagination.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <title>Learning category: {data.category}</title>
</svelte:head>

<header class="mb-10">
  <p class="font-600 mb-3 text-xs tracking-[0.18em] text-[var(--accent)] uppercase">Category</p>
  <h1>{data.category}</h1>
  <p class="m-0"><a href="/learning/category">← All categories</a></p>
</header>

{#if data.posts.length}
  <PostsList posts={data.posts} />
  <Pagination
    currentPage="1"
    totalPosts={data.total}
    path="/learning/category/{data.category}/page"
  />
{:else}
  <p><strong>Ope!</strong> I couldn't find any notes in the category “{data.category}”.</p>

  <p><a href="/learning">Back to Learning</a></p>
{/if}
