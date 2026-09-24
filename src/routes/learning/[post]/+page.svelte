<script>
  import ArticleMinimap from "$lib/components/ArticleMinimap.svelte";
  import { siteLink, siteTitle } from "$lib/config";

  let { data } = $props();

  let meta = $derived(data.meta);
  let articleBody = $state();

  function formatDate(date) {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
    }).format(new Date(`${date}T00:00:00`));
  }
</script>

<svelte:head>
  <title>{meta.title} | {siteTitle}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={meta.title} />
  <meta property="og:description" content={meta.excerpt} />
  <meta name="twitter:title" content={meta.title} />
  <meta name="twitter:description" content={meta.excerpt} />
  {#if meta.coverImage}
    <meta property="og:image:width" content={meta.coverWidth} />
    <meta property="og:image:height" content={meta.coverHeight} />
    <meta property="og:image" content="{siteLink}{meta.coverImage}" />
    <meta name="twitter:image" content="{siteLink}{meta.coverImage}" />
    <meta name="twitter:card" content="summary_large_image" />
  {:else}
    <meta name="twitter:card" content="summary" />
  {/if}
</svelte:head>

<article class="post">
  <header class="max-w-68ch mx-auto mb-10">
    <h1 class="last-line-underline"><span>{meta.title}</span></h1>
    {#if meta.excerpt}
      <p class="my-0 text-lg text-[var(--muted-ink)]">{meta.excerpt}</p>
    {/if}
    <dl
      class="mt-6 flex flex-wrap gap-x-8 gap-y-2 border-t border-[var(--border)] pt-4 text-xs text-[var(--muted-ink)]"
    >
      <div class="flex gap-2">
        <dt class="font-700 text-[var(--ink)]">Published</dt>
        <dd class="m-0"><time datetime={meta.date}>{formatDate(meta.date)}</time></dd>
      </div>
      <div class="flex gap-2">
        <dt class="font-700 text-[var(--ink)]">Updated</dt>
        <dd class="m-0"><time datetime={meta.updated}>{formatDate(meta.updated)}</time></dd>
      </div>
    </dl>
  </header>

  {#if meta.coverImage}
    <figure class="cover-image max-w-48rem mx-auto mb-12">
      <img
        class="block h-auto w-full border border-[var(--border)]"
        src={meta.coverImage}
        alt={meta.imageAlt || ""}
        style="aspect-ratio: {meta.coverWidth} / {meta.coverHeight};"
        width={meta.coverWidth}
        height={meta.coverHeight}
      />
      {#if meta.coverCaption}
        <figcaption>
          Photo by
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href={`${meta.coverCaption.authorUrl}?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText`}
            >{meta.coverCaption.author}</a
          >
          on
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            >Unsplash</a
          >
        </figcaption>
      {:else if meta.imageAlt}
        <figcaption>{meta.imageAlt}</figcaption>
      {/if}
    </figure>
  {/if}

  <div class="article-layout max-w-50rem mx-auto grid gap-12 md:grid-cols-[minmax(0,68ch)_4.5rem]">
    <div class="post-content min-w-0" bind:this={articleBody}>
      <data.PostContent />
    </div>
    {#if articleBody}
      <ArticleMinimap target={articleBody} />
    {/if}
  </div>

  <div class="max-w-68ch mx-auto">
    <svelte:element
      this={"script"}
      src="https://utteranc.es/client.js"
      repo="jakxz/jakxz.github.io"
      issue-term="og:title"
      theme="preferred-color-scheme"
      crossorigin="anonymous"
      async
    />

    {#if meta.categories?.length}
      <aside class="mt-14 border-t border-[var(--border)] pt-8" aria-labelledby="post-categories">
        <h2
          id="post-categories"
          class="m-0 mb-4 text-xs tracking-[0.16em] text-[var(--muted-ink)] uppercase"
        >
          Filed under
        </h2>
        <ul class="m-0 flex list-none flex-wrap gap-2 p-0">
          {#each meta.categories as category (category)}
            <li class="m-0">
              <a
                class="inline-block border border-[var(--border)] bg-[var(--sheet-muted)] px-3 py-2 font-mono text-xs no-underline hover:border-[var(--accent)]"
                href="/learning/category/{category}/"
              >
                #{category}
              </a>
            </li>
          {/each}
        </ul>
      </aside>
    {/if}
  </div>
</article>

<style>
  :global(.utterances-frame) {
    position: unset;
  }

  :global(.post-content > :first-child) {
    margin-top: 0;
  }

  :global(.post-content > :last-child) {
    margin-bottom: 0;
  }
</style>
