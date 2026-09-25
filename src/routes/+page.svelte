<script>
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";

  import { siteTitle, subtitles } from "$lib/config";

  let { data } = $props();
  let subtitleIndex = $state(0);
  let motionDuration = $state(0);
  let [description, subtitle] = $derived(subtitles[subtitleIndex]);

  onMount(() => {
    motionDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 180;
  });

  function nextSubtitle(event) {
    subtitleIndex = (subtitleIndex + 1) % subtitles.length;
    event.currentTarget.blur();
  }

  function formatDate(date) {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
    }).format(new Date(`${date}T00:00:00`));
  }
</script>

<svelte:head>
  <title>{siteTitle}</title>
</svelte:head>

<div
  class="max-w-68rem xs:px-8 xs:py-16 mx-auto grid w-full items-start gap-11 px-4 py-12 md:grid-cols-[minmax(18rem,0.82fr)_minmax(0,1.18fr)] md:gap-6"
>
  <section
    aria-labelledby="sidebar-heading"
    class="intro-stack [@media(min-height:52rem)]:mt-6 rounded-1 flex min-w-0 flex-col bg-[var(--sheet)] p-3 [box-shadow:var(--sheet-shadow)]"
  >
    <figure class="m-0">
      <div
        class="rounded-1 relative aspect-[4/3] overflow-hidden bg-[var(--sheet-muted)] md:aspect-[1.67/1]"
      >
        <img
          src="/images/headshot.webp"
          alt="Headshot of Jason at his wedding."
          width="909"
          height="1136"
          decoding="async"
          class="absolute inset-0 h-full w-full object-cover object-[50%_34%]"
        />
        <img
          src="/images/jason-at-the-keys.webp"
          alt="Jason playing his Nord keyboard on stage."
          width="1600"
          height="2000"
          decoding="async"
          class="photo-dark absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-240 ease-[ease] motion-reduce:transition-none"
        />
      </div>
      <figcaption
        class="min-h-8 px-1 pt-2 pb-0 text-right font-mono text-xs text-[var(--muted-ink)]"
      >
        <span class="photo-caption-light">
          Me at my wedding!<span class="sr-only">Headshot of Jason at his wedding.</span>
        </span>
        <span class="photo-caption-dark hidden">
          <em>Vibing</em> at the keys.<span class="sr-only"
            >Jason playing his Nord keyboard on stage.</span
          >
        </span>
      </figcaption>
    </figure>

    <div class="xs:px-6 xs:pt-5 xs:pb-8 flex flex-col gap-y-4 px-3 pt-4 pb-6 sm:gap-y-8">
      <h1 id="sidebar-heading" class="m-0 ms-4 overflow-visible leading-[0.9] tracking-[-0.06em]">
        <span class="name-heading inline-block first-letter:text-[1.16em]">Jason</span>
        <span class="name-heading inline-block first-letter:text-[1.16em]">Kurian</span>
      </h1>

      <button
        class="post-card w-full cursor-pointer overflow-hidden border-none bg-[var(--sheet-muted)] p-5 text-left text-[var(--ink)]"
        type="button"
        onclick={nextSubtitle}
        aria-label="Change subtitle"
      >
        {#key subtitleIndex}
          <code
            class="font-300 block border-none bg-transparent p-0 text-lg whitespace-pre"
            transition:slide={{ duration: motionDuration }}
          >
            {description}<br />{subtitle}
          </code>
        {/key}
      </button>

      <p class="mb-0 leading-relaxed">
        👋🏽 hey, thanks for stopping by! My friends call me Jay, or JK. Contact me on
        <a
          target="_blank"
          rel="nofollow noopener noreferrer"
          href="https://bsky.app/profile/jasonkurian.dev"
        >
          Bluesky</a
        >
        or
        <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/jakxz">
          GitHub</a
        >.
      </p>
    </div>
  </section>

  <section
    aria-labelledby="sidebar-posts-heading"
    class="rounded-1 xs:px-8 xs:py-10 border border-[var(--border)] bg-[var(--sheet)] px-5 py-8 [box-shadow:var(--sheet-shadow)]"
  >
    <div class="mb-7 flex items-end justify-between gap-4">
      <h2 id="sidebar-posts-heading" class="m-0">Recent Posts</h2>
      <a class="shrink-0 font-mono text-sm" href="/learning">View all →</a>
    </div>

    <div class="post-card-list grid gap-4">
      {#each data.posts as post, index (post.slug)}
        <article
          class="post-card xs:p-6 relative cursor-pointer border border-[var(--border)] bg-[var(--sheet-muted)] p-5"
        >
          <time
            datetime={post.updated}
            class="font-600 block text-xs tracking-[0.12em] text-[var(--muted-ink)] uppercase"
          >
            <i class="i-radix-icons-lap-timer mr-1 align-[-0.125em] text-sm" aria-hidden="true"></i>
            {formatDate(post.updated)}
          </time>
          <h3 class="my-2 text-[clamp(1.35rem,4vw,1.8rem)]">
            <a class="post-card-title" href={`/learning/${post.slug}`}>{post.title}</a>
          </h3>
          <ul class="mt-4 flex list-none flex-wrap gap-2 p-0" aria-label="Categories">
            {#each post.categories as category (category)}
              <li class="m-0">
                <a
                  class="relative z-1 inline-block border border-[var(--border)] bg-[var(--sheet)] px-2 py-1 font-mono text-xs no-underline hover:border-[var(--accent)]"
                  href={`/learning/category/${category}`}>#{category}</a
                >
              </li>
            {/each}
          </ul>
        </article>
      {/each}
    </div>
  </section>
</div>

<style>
  :global(:root[data-theme="dark"]) .photo-dark {
    opacity: 1;
  }

  :global(:root[data-theme="dark"]) .photo-caption-light {
    display: none;
  }

  :global(:root[data-theme="dark"]) .photo-caption-dark {
    display: inline;
  }

  @media (prefers-color-scheme: dark) {
    :global(:root:not([data-theme])) .photo-dark {
      opacity: 1;
    }

    :global(:root:not([data-theme])) .photo-caption-light {
      display: none;
    }

    :global(:root:not([data-theme])) .photo-caption-dark {
      display: inline;
    }
  }

  @media (min-width: 1024px) and (min-height: 56rem) {
    .intro-stack {
      position: sticky;
      margin: 0;
      top: 2rem;
    }
  }
</style>
