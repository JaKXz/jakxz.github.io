<script>
  import { postsPerPage } from "$lib/config";

  import Pagination from "./Pagination.svelte";
  import PostsList from "./PostsList.svelte";

  let { category, posts, page, totalPosts } = $props();

  let categoryPath = $derived(`/learning/category/${category}`);
  let lowerBound = $derived((page - 1) * postsPerPage + 1);
  let upperBound = $derived(lowerBound + posts.length - 1);
</script>

<svelte:head>
  <title>
    {page === 1 ? `Learning category: ${category}` : `Learning category ${category} - page ${page}`}
  </title>
</svelte:head>

<div class="mb-10">
  <p class="font-600 mb-3 text-xs tracking-[0.18em] text-[var(--accent)] uppercase">Category</p>
  <h1>{category}</h1>
  {#if posts.length}
    <p class="m-0 text-[var(--muted-ink)]">Notes {lowerBound}–{upperBound} of {totalPosts}</p>
  {/if}
  <p class="mt-3 mb-0"><a href="/learning/category">← All categories</a></p>
</div>

{#if posts.length}
  <Pagination currentPage={page} {totalPosts} path="{categoryPath}/page" />

  <div class="my-8"><PostsList {posts} /></div>

  <Pagination currentPage={page} {totalPosts} path="{categoryPath}/page" />
{:else}
  {#if totalPosts > 0}
    <p><strong>Ope!</strong> I couldn't find any notes on page {page} of “{category}”.</p>
    <p><a href={categoryPath}>Back to {category}</a></p>
  {:else}
    <p><strong>Ope!</strong> I couldn't find any notes in the category “{category}”.</p>
  {/if}

  <p><a href="/learning">Back to Learning</a></p>
{/if}
