<script>
  let { posts = [] } = $props();

  function formatDate(date) {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
    }).format(new Date(`${date}T00:00:00`));
  }
</script>

<ol class="m-0 grid list-none gap-4 p-0">
  {#each posts as post, index (post.slug)}
    <li class="m-0">
      <article
        class="post-preview xs:grid-cols-[auto_1fr] xs:p-6 grid gap-4 border border-[var(--border)] bg-[var(--sheet-muted)] p-5"
      >
        <div class="min-w-0">
          <time
            datetime={post.date}
            class="font-600 block text-xs tracking-[0.12em] text-[var(--muted-ink)] uppercase"
          >
            {formatDate(post.date)}
          </time>
          <h2 class="my-2 text-[clamp(1.35rem,4vw,1.8rem)]">
            <a class="title-link" href="/learning/{post.slug}">{post.title}</a>
          </h2>
          {#if post.excerpt != null}
            <p class="my-0 text-[var(--muted-ink)]">{post.excerpt}</p>
          {/if}
          {#if post.categories?.length}
            <ul class="mt-4 flex list-none flex-wrap gap-2 p-0" aria-label="Categories">
              {#each post.categories as category (category)}
                <li class="m-0">
                  <a
                    class="inline-block border border-[var(--border)] bg-[var(--sheet)] px-2 py-1 font-mono text-xs no-underline hover:border-[var(--accent)]"
                    href="/learning/category/{category}">#{category}</a
                  >
                </li>
              {/each}
            </ul>
          {/if}
        </div>
      </article>
    </li>
  {/each}
</ol>

<style lang="scss">
  .post-preview {
    box-shadow: 0.3rem 0.3rem 0 var(--border);
    transition:
      transform 140ms ease-out,
      box-shadow 140ms ease-out,
      border-color 140ms ease-out;

    &:focus-within,
    &:hover {
      border-color: var(--accent);
      box-shadow: 0.45rem 0.45rem 0 color-mix(in srgb, var(--accent) 38%, var(--border));
      transform: translate(-0.1rem, -0.1rem);
    }
  }

  .title-link {
    color: var(--ink);
    text-decoration-color: transparent;

    &:hover,
    &:focus-visible {
      color: var(--accent);
      text-decoration-color: currentColor;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .post-preview {
      transition: none;
    }
  }
</style>
