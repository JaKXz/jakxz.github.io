<script>
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";

  import { subtitles } from "$lib/config";

  let { posts = [] } = $props();
  let subtitleIndex = $state(0);
  let motionDuration = $state(0);
  let [description, subtitle] = $derived(subtitles[subtitleIndex]);

  onMount(() => {
    motionDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 180;
  });

  function nextSubtitle() {
    subtitleIndex = (subtitleIndex + 1) % subtitles.length;
  }

  function formatDate(date) {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
    }).format(new Date(`${date}T00:00:00`));
  }
</script>

<div
  class="mx-auto grid w-full max-w-68rem items-start gap-5 px-4 py-12 xs:px-8 xs:py-16 md:grid-cols-[minmax(18rem,0.82fr)_minmax(0,1.18fr)] md:gap-6"
>
  <section
    aria-labelledby="sidebar-heading"
    class="border border-[var(--border)] bg-[var(--sheet)] px-6 py-9 mt-4 [box-shadow:var(--sheet-shadow)] xs:px-9 xs:py-11 md:sticky md:top-8"
  >
    <h1
      id="sidebar-heading"
      class="m-0 overflow-visible leading-[0.9] tracking-[-0.06em] after:hidden"
    >
      <span class="name-heading inline-block first-letter:text-[1.16em]">Jason</span>
      <span class="name-heading inline-block first-letter:text-[1.16em]">Kurian</span>
    </h1>

    <button
      class="subtitle-button reset-button mt-8 w-full cursor-pointer overflow-hidden p-0 text-left text-[var(--ink)]"
      type="button"
      onclick={nextSubtitle}
      aria-label="Change subtitle"
    >
      {#key subtitleIndex}
        <code
          class="block whitespace-pre border-none bg-transparent p-0 text-lg font-300"
          transition:slide={{ duration: motionDuration }}
        >
          {description}<br />{subtitle}
        </code>
      {/key}
    </button>

    <p class="mb-0 mt-8 leading-relaxed">
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
  </section>

  <section
    aria-labelledby="sidebar-posts-heading"
    class="border border-[var(--border)] bg-[var(--sheet)] px-5 py-8 [box-shadow:var(--sheet-shadow)] xs:px-8 xs:py-10"
  >
    <div class="mb-7 flex items-end justify-between gap-4">
      <h2 id="sidebar-posts-heading" class="m-0">Recent Posts</h2>
      <a class="shrink-0 font-mono text-sm" href="/learning">View all →</a>
    </div>

    <div class="grid gap-3">
      {#each posts as post, index (post.slug)}
        <article class="border border-[var(--border)] bg-[var(--sheet-muted)] p-5 xs:p-6">
          <div class="subdued mb-5 flex items-center justify-between gap-4 font-mono text-xs">
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <time datetime={post.updated}>🔃 {formatDate(post.updated)}</time>
          </div>
          <h3 class="m-0 text-xl leading-snug xs:text-2xl">
            <a class="text-[var(--ink)] hover:text-[var(--accent)]" href={`/learning/${post.slug}`}
              >{post.title}</a
            >
          </h3>
          <div class="mt-4 flex flex-wrap gap-2">
            {#each post.categories as category (category)}
              <a href={`/learning/category/${category}`}><code>#{category}</code></a>
            {/each}
          </div>
        </article>
      {/each}
    </div>
  </section>
</div>

<style>
  .subtitle-button {
    background-image: linear-gradient(
      105deg,
      transparent 35%,
      color-mix(in srgb, var(--accent) 12%, transparent) 50%,
      transparent 65%
    );
    background-position: 50% 0;
    background-size: 300% 100%;
  }

  @media (prefers-reduced-motion: no-preference) {
    .subtitle-button {
      animation: subtitle-sweep 8s ease-in-out infinite;
    }
  }

  @keyframes subtitle-sweep {
    0%,
    45% {
      background-position: 130% 0;
    }

    80%,
    100% {
      background-position: -30% 0;
    }
  }
</style>
