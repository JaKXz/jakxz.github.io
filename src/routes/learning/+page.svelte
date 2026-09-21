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

<header class="max-w-42rem mb-12">
  <p class="font-600 mb-3 text-xs tracking-[0.18em] text-[var(--accent)] uppercase">Field notes</p>
  <h1>Learning</h1>
  <p class="m-0 text-lg text-[var(--muted-ink)]">
    Notes on building thoughtful interfaces, durable systems, and stronger teams.
  </p>
  <a class="font-600 mt-5 inline-block text-sm" href="/learning/category">Browse by category →</a>
</header>

<section aria-label="Learning entries" class="grid gap-8">
  <PostsList posts={data.posts} />
  <Pagination currentPage={1} totalPosts={data.total} />
</section>
