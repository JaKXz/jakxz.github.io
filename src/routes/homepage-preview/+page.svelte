<script>
  import { HOMEPAGE_PREVIEW_VARIANTS } from "$lib/assets/js/homepage-previews";
  import { siteTitle } from "$lib/config";

  const variantDetails = {
    chapters: {
      title: "Chapters",
      description: "The current two-part rhythm, refined into distinct full-height cards.",
    },
    "single-sheet": {
      title: "Single sheet",
      description:
        "One continuous editorial card that keeps the introduction and writing together.",
    },
    sidebar: {
      title: "Sidebar",
      description: "A compact identity card paired with a more prominent stream of recent writing.",
    },
  };
</script>

<svelte:head>
  <title>{siteTitle} | Homepage previews</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="min-h-100svh flex items-center px-4 py-12 xs:px-8 xs:py-16">
  <section
    class="mx-auto w-full max-w-60rem border border-[var(--border)] bg-[var(--sheet)] px-6 py-9 [box-shadow:var(--sheet-shadow)] xs:px-10 xs:py-12 sm:px-14 sm:py-16"
    aria-labelledby="preview-index-heading"
  >
    <a class="font-mono text-sm" href="/">← Back home</a>

    <div class="mb-10 mt-8 max-w-42rem xs:mb-12">
      <h1 id="preview-index-heading" class="mb-6">Homepage previews</h1>
      <p class="m-0 text-lg leading-relaxed text-[var(--muted-ink)]">
        Three ways to lean further into the card-based homepage, each using the same content and
        visual system.
      </p>
    </div>

    <ol class="m-0 grid list-none gap-4 p-0 sm:grid-cols-3">
      {#each HOMEPAGE_PREVIEW_VARIANTS as variant, index (variant)}
        <li class="m-0">
          <a
            class="group h-full flex flex-col border border-[var(--border)] bg-[var(--sheet-muted)] p-5 text-[var(--ink)] no-underline transition-colors hover:border-[var(--accent)] focus-visible:border-[var(--accent)] xs:p-6"
            href={`/homepage-preview/${variant}/`}
          >
            <span class="mb-8 font-mono text-xs text-[var(--muted-ink)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 class="m-0 text-xl group-hover:text-[var(--accent)]">
              {variantDetails[variant].title}
            </h2>
            <p class="mb-8 mt-3 flex-1 text-sm leading-relaxed text-[var(--muted-ink)]">
              {variantDetails[variant].description}
            </p>
            <span class="font-mono text-sm">Open preview →</span>
          </a>
        </li>
      {/each}
    </ol>
  </section>
</div>
