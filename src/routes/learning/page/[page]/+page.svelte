<!-- This file handles any /learning/page/x route for pagination -->
<script>
  import PostsList from "$lib/components/PostsList.svelte";
  import Pagination from "$lib/components/Pagination.svelte";
  import { postsPerPage } from "$lib/config";

  let { data } = $props();

  let lowerBound = $derived(data.page * postsPerPage - (postsPerPage - 1) || 1);
  let upperBound = $derived(Math.min(data.page * postsPerPage, data.totalPosts));
</script>

<svelte:head>
  <title>Learning - page {data.page}</title>
</svelte:head>

{#if data.posts.length}
  <header class="mb-10">
    <p class="font-600 mb-3 text-xs tracking-[0.18em] text-[var(--accent)] uppercase">Learning</p>
    <h1>Notes {lowerBound}–{upperBound}</h1>
    <p class="m-0 text-[var(--muted-ink)]">Page {data.page} of the archive.</p>
  </header>
  <Pagination currentPage={data.page} totalPosts={data.totalPosts} />

  <div class="my-8"><PostsList posts={data.posts} /></div>

  <Pagination currentPage={data.page} totalPosts={data.totalPosts} />
{:else}
  <h1>Oops!</h1>

  <p>Sorry, no notes to show here.</p>

  <a href="/learning">Back to Learning</a>
{/if}
