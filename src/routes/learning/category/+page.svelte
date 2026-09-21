<script>
  let { data } = $props();
</script>

<svelte:head>
  <title>Learning | Categories</title>
</svelte:head>

<header class="max-w-42rem mb-10">
  <p class="font-600 mb-3 text-xs tracking-[0.18em] text-[var(--accent)] uppercase">Index</p>
  <h1>Categories</h1>
  <p class="m-0 text-[var(--muted-ink)]">A map of the ideas and tools in these notes.</p>
</header>

<ul class="xs:grid-cols-2 m-0 grid list-none gap-3 p-0">
  {#each data.uniqueCategories as category (category.title)}
    <li class="m-0">
      <a
        class="flex items-center justify-between gap-4 border border-[var(--border)] bg-[var(--sheet-muted)] p-4 text-[var(--ink)] no-underline transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        href="/learning/category/{category.title}"
      >
        <strong>{category.title}</strong>
        <span class="font-mono text-xs text-[var(--muted-ink)]">{category.count}</span>
      </a>
    </li>
  {/each}
</ul>

<p class="mt-10"><a href="/learning">← All learning notes</a></p>
