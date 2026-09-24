<script>
  import PostsList from "$lib/components/PostsList.svelte";
  import { siteTitle } from "$lib/config";

  let { data } = $props();

  const topics = [
    {
      title: "Growth & craft",
      description:
        "Personal growth, tangible mechanics of software development, and durable practices.",
    },
    {
      title: "Open source",
      description: "Finding approachable projects and making contributions that build confidence.",
    },
    {
      title: "Professional networks",
      description: "Building and maintaining genuine connections throughout your career.",
    },
    {
      title: "Career navigation",
      description: "Reading job descriptions, evaluating companies, and navigating the industry.",
    },
    {
      title: "Applications & interviews",
      description:
        "Resumé writing, interview preparation, and telling a clearer story about your work.",
    },
  ];
</script>

<svelte:head>
  <title>{siteTitle} | Coaching</title>
</svelte:head>

<header class="max-w-46rem mb-12">
  <p class="font-600 mb-3 text-xs tracking-[0.18em] text-[var(--accent)] uppercase">
    One-on-one coaching
  </p>
  <h1 class="last-line-underline"><span>Personal coaching for software developers</span></h1>
  <p class="m-0 text-lg text-[var(--muted-ink)]">
    I am a low-volume coach for developers who prefer a highly personalized approach over a group
    setting.
  </p>
</header>

<div class="grid items-start gap-8 md:grid-cols-[minmax(0,1.25fr)_minmax(17rem,0.75fr)]">
  <section aria-labelledby="coaching-topics-heading">
    <div class="mb-6">
      <p class="font-600 mb-2 text-xs tracking-[0.16em] text-[var(--muted-ink)] uppercase">
        Bring what matters
      </p>
      <h2 id="coaching-topics-heading" class="m-0">What we can work on</h2>
    </div>

    <ol class="m-0 grid list-none gap-3 p-0">
      {#each topics as topic, index (topic.title)}
        <li
          class="rounded-1 m-0 grid grid-cols-[2.5rem_minmax(0,1fr)] items-baseline gap-3 border border-[var(--border)] bg-[var(--sheet-muted)] p-5"
        >
          <span
            class="font-600 text-xs tracking-[0.12em] text-[var(--muted-ink)]"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 class="mt-0 mb-2 text-xl">{topic.title}</h3>
            <p class="m-0 text-[var(--muted-ink)]">{topic.description}</p>
          </div>
        </li>
      {/each}
    </ol>
  </section>

  <aside
    class="rounded-1 border border-[var(--border)] bg-[var(--sheet-muted)] p-6 [box-shadow:var(--shadow-soft)] md:sticky md:top-8"
    aria-labelledby="coaching-details-heading"
  >
    <p class="font-600 mt-0 mb-2 text-xs tracking-[0.16em] text-[var(--muted-ink)] uppercase">
      Details
    </p>
    <h2 id="coaching-details-heading" class="m-0">€100</h2>
    <p class="font-600 mt-2 mb-5 text-sm text-[var(--ink)]">per 75-minute session</p>
    <p>
      You bring the agenda. Finding the right cadence for you will be part of our first session and
      can evolve over time.
    </p>
    <p>I am happy to provide a free 30-minute consultation to see if we are a good fit.</p>
    <a
      class="font-800 rounded-1 mt-3 inline-flex min-h-11 items-center justify-center border-2 border-[var(--ink)] bg-[var(--ink)] px-4 py-2 text-[0.9rem] text-[var(--sheet)] no-underline transition duration-200 hover:translate-y-[-0.1rem] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] focus-visible:translate-y-[-0.1rem] focus-visible:border-[var(--accent)] focus-visible:bg-[var(--accent)] focus-visible:text-[var(--accent-contrast)]"
      target="_blank"
      rel="nofollow noopener noreferrer"
      href="https://bsky.app/profile/jasonkurian.dev"
    >
      Start a conversation →
    </a>
  </aside>
</div>

{#if data.posts.length}
  <section
    class="mt-16 border-t border-[var(--border)] pt-10"
    aria-labelledby="coaching-writing-heading"
  >
    <div class="mb-7 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p class="font-600 mb-2 text-xs tracking-[0.16em] text-[var(--muted-ink)] uppercase">
          From the notebook
        </p>
        <h2 id="coaching-writing-heading" class="m-0">Related writing</h2>
      </div>
      <a class="font-mono text-sm" href="/learning/category/coaching">All →</a>
    </div>
    <PostsList posts={data.posts} />
  </section>
{/if}
