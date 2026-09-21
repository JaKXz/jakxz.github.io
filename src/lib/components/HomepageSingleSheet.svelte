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

<div class="min-h-100svh flex items-center px-4 py-12 xs:px-8 xs:py-16">
  <div
    class="mx-auto w-full max-w-60rem border border-[var(--border)] bg-[var(--sheet)] px-6 py-9 [box-shadow:var(--sheet-shadow)] xs:px-10 xs:py-12 sm:px-14 sm:py-16"
  >
    <section aria-labelledby="single-sheet-heading" class="max-w-44rem">
      <h1
        id="single-sheet-heading"
        class="name-heading m-0 overflow-visible text-[clamp(3.25rem,10vw,7.25rem)] leading-[0.88] tracking-[-0.065em] first-letter:text-[1.16em] after:hidden"
      >
        Jason Kurian
      </h1>

      <button
        class="reset-button mt-8 w-full cursor-pointer p-0 text-left text-[var(--ink)]"
        type="button"
        onclick={nextSubtitle}
        aria-label="Change subtitle"
      >
        {#key subtitleIndex}
          <code
            class="block whitespace-pre border-none bg-transparent p-0 text-xl font-300"
            transition:slide={{ duration: motionDuration }}
          >
            {description}<br />{subtitle}
          </code>
        {/key}
      </button>

      <p class="mb-0 mt-8 max-w-36rem leading-relaxed">
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

    <div aria-hidden="true" class="my-10 h-px bg-[var(--border)] xs:my-14"></div>

    <section aria-labelledby="single-sheet-posts-heading">
      <div class="mb-6 flex flex-wrap items-end justify-between gap-3">
        <h2 id="single-sheet-posts-heading" class="m-0">Recent Posts</h2>
        <a class="font-mono text-sm" href="/learning">See all entries →</a>
      </div>

      <div class="border-b border-[var(--border)]">
        {#each posts as post (post.slug)}
          <article
            class="grid gap-2 border-t border-[var(--border)] py-5 xs:grid-cols-[8.5rem_minmax(0,1fr)] xs:gap-6"
          >
            <time class="subdued font-mono text-sm" datetime={post.updated}
              >🔃 {formatDate(post.updated)}</time
            >
            <div class="min-w-0">
              <h3 class="m-0 text-xl leading-snug">
                <a
                  class="text-[var(--ink)] hover:text-[var(--accent)]"
                  href={`/learning/${post.slug}`}>{post.title}</a
                >
              </h3>
              <div class="mt-3 flex flex-wrap gap-2">
                {#each post.categories as category (category)}
                  <a href={`/learning/category/${category}`}><code>#{category}</code></a>
                {/each}
              </div>
            </div>
          </article>
        {/each}
      </div>
    </section>
  </div>
</div>
