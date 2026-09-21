<script>
  import Pagination from "$lib/components/Pagination.svelte";
  import PostsList from "$lib/components/PostsList.svelte";
  import { siteTitle, siteDescription } from "$lib/config";

  let { data } = $props();
</script>

<svelte:head>
  <title>{siteTitle} | Learning</title>
  <meta data-key="description" name="description" content={siteDescription} />
</svelte:head>

<header class="mb-12 max-w-42rem">
  <p class="mb-3 text-xs font-600 uppercase tracking-[0.18em] text-[var(--accent)]">Field notes</p>
  <h1>Learning</h1>
  <p class="m-0 text-lg text-[var(--muted-ink)]">
    Notes on building thoughtful interfaces, durable systems, and stronger teams.
  </p>
  <a class="mt-5 inline-block text-sm font-600" href="/learning/category">Browse by category →</a>
</header>

<section aria-label="Learning entries" class="grid gap-8">
  <PostsList posts={data.posts} />
  <Pagination currentPage={1} totalPosts={data.total} />
</section>
