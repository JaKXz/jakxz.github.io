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

  function formatDate(date) {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
    }).format(new Date(`${date}T00:00:00`));
  }
</script>

<div class="chapters-home">
  <section class="min-h-100svh flex items-center px-4 py-12" aria-labelledby="chapters-name">
    <div
      class="mx-auto w-full max-w-42rem border border-[var(--border)] bg-[var(--sheet)] p-7 [box-shadow:var(--sheet-shadow)] xs:p-12"
    >
      <h1
        id="chapters-name"
        class="m-0 overflow-visible p-0 text-[clamp(3.5rem,14vw,6.5rem)] leading-[0.96] tracking-[-0.07em] after:hidden"
      >
        <span class="name-heading block first-letter:text-[1.16em]">Jason</span>
        <span class="name-heading block first-letter:text-[1.16em]">Kurian</span>
      </h1>

      <button
        class="reset-button mt-10 w-full cursor-pointer p-0 text-left text-[var(--ink)]"
        type="button"
        aria-label="Change subtitle"
        onclick={() => {
          subtitleIndex = (subtitleIndex + 1) % subtitles.length;
        }}
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

      <p class="mb-0 mt-10">
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
    class="min-h-100svh flex items-center px-4 py-12"
    aria-labelledby="chapters-recent-posts"
  >
    <div
      class="mx-auto w-full max-w-60rem border border-[var(--border)] bg-[var(--sheet)] p-7 [box-shadow:var(--sheet-shadow)] xs:p-12"
    >
      <h2 id="chapters-recent-posts" class="mt-0">Recent Posts</h2>
      <div class="grid gap-3 xs:grid-cols-2">
        {#each posts as post (post.slug)}
          <article class="border border-[var(--border)] bg-[var(--sheet-muted)] p-5">
            <a href="/learning/{post.slug}" class="block no-underline">
              <p class="subdued m-0">
                🔃
                {formatDate(post.updated)}
              </p>
              <h3 class="my-2 text-base text-[var(--ink)] tracking-[-0.015em]">{post.title}</h3>
            </a>
            <div class="mt-4 flex flex-wrap gap-2">
              {#each post.categories as category (category)}
                <a href="/learning/category/{category}"><code>#{category}</code></a>
              {/each}
            </div>
          </article>
        {/each}
      </div>
      <p class="mb-0 mt-8 text-center"><a href="/learning">See all entries</a></p>
    </div>
  </section>
</div>
