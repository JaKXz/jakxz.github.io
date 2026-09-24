<!-- This page handles any error encountered by the site. -->
<script>
  import { page } from "$app/state";
  import { siteTitle } from "$lib/config";

  let pingCount = $state(0);

  let isNotFound = $derived(page.status === 404);
  let heading = $derived(isNotFound ? "Signal lost." : "Signal interrupted.");
  let description = $derived(
    isNotFound
      ? "The page you're looking for drifted off the map."
      : "Something disrupted the connection.",
  );
  let metaDescription = $derived(
    isNotFound
      ? "The page you requested could not be found. Browse Jason Kurian’s learning notes or coaching page."
      : "Something went wrong loading Jason Kurian’s website. Try the homepage or return later.",
  );
  let errorMessage = $derived(page.error?.message ?? "Unexpected error");
  let pingMessage = $derived(
    pingCount === 0 ? "Radar ready." : `Ping ${pingCount}: no signal found. Try a known route.`,
  );

  function sendPing() {
    pingCount += 1;
  }
</script>

<svelte:head>
  <title>{page.status} — {heading} | {siteTitle}</title>
  <meta name="description" content={metaDescription} />
</svelte:head>

<section
  class="grid min-h-[clamp(34rem,65svh,45rem)] items-center gap-12 pt-4 pb-12 sm:grid-cols-[minmax(0,1fr)_minmax(17rem,0.85fr)] sm:py-0"
  aria-labelledby="error-heading"
>
  <div class="min-w-0">
    <p
      class="mt-0 mb-4 flex items-center gap-[0.6rem] [font-family:var(--codeFont)] text-[0.8rem] tracking-[0.14em] text-[var(--ink)] uppercase"
    >
      <span
        class="status-light h-[0.65rem] w-[0.65rem] flex-none rounded-full bg-[var(--accent)]"
        aria-hidden="true"
      ></span>
      Error {page.status}
    </p>

    <h1 id="error-heading" class="mb-6 text-[clamp(2.8rem,11vw,5.75rem)] tracking-[-0.035em]">
      {heading}
    </h1>
    <p class="m-0 max-w-120 text-[clamp(1.1rem,3vw,1.35rem)] leading-[1.45]">
      {description}
    </p>

    <p
      class="mt-6 mb-0 flex flex-wrap items-baseline gap-x-[0.65rem] gap-y-[0.35rem] text-[0.8rem] text-[var(--ink)]"
    >
      <span class="[font-family:var(--codeFont)] tracking-[0.08em] uppercase">System says</span>
      <code class="[overflow-wrap:anywhere]">{errorMessage}</code>
    </p>

    <nav class="mt-8 flex flex-wrap gap-3" aria-label="Error recovery">
      <a
        class="route-link font-800 inline-flex min-h-11 items-center justify-center border-2 border-[var(--ink)] bg-[var(--ink)] px-4 py-2 text-[0.9rem] text-[var(--sheet)] no-underline transition duration-200 hover:translate-y-[-0.1rem] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] focus-visible:translate-y-[-0.1rem] focus-visible:border-[var(--accent)] focus-visible:bg-[var(--accent)] focus-visible:text-[var(--accent-contrast)]"
        href="/"
      >
        Return home
      </a>
      <a
        class="route-link font-800 inline-flex min-h-11 items-center justify-center border-2 border-[var(--border-strong)] bg-transparent px-4 py-2 text-[0.9rem] text-[var(--ink)] no-underline transition duration-200 hover:translate-y-[-0.1rem] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)] focus-visible:translate-y-[-0.1rem] focus-visible:border-[var(--accent)] focus-visible:bg-[var(--accent)] focus-visible:text-[var(--accent-contrast)]"
        href="/learning"
      >
        Browse learning
      </a>
    </nav>
  </div>

  <div class="w-full max-w-84 justify-self-center">
    <div
      class="radar relative isolate aspect-square w-full overflow-hidden rounded-full border border-[var(--border-strong)] bg-[var(--sheet-muted)] text-[var(--ink)]"
      aria-hidden="true"
    >
      <span class="absolute top-1/2 right-0 left-0 z-[-1] h-px bg-current opacity-25"></span>
      <span class="absolute top-0 bottom-0 left-1/2 z-[-1] w-px bg-current opacity-25"></span>
      <span class="absolute inset-[12.5%] rounded-full border border-current opacity-35"></span>
      <span class="absolute inset-1/4 rounded-full border border-current opacity-35"></span>
      <span class="absolute inset-[37.5%] rounded-full border border-current opacity-35"></span>
      <span class="sweep absolute inset-0 z-[-1] rounded-full"></span>
      <span
        class="signal absolute top-[31%] left-[70%] h-[0.7rem] w-[0.7rem] rounded-full bg-[var(--accent)]"
      ></span>

      {#if pingCount > 0}
        {#key pingCount}
          <span
            class="ping-wave absolute top-[31%] left-[70%] h-4 w-4 rounded-full border-2 border-[var(--accent)]"
          ></span>
        {/key}
      {/if}

      <strong
        class="radar-code absolute top-1/2 left-1/2 [font-family:var(--codeFont)] text-[clamp(2rem,11vw,4rem)] leading-none text-[var(--ink)]"
      >
        {page.status}
      </strong>
    </div>

    <button class="mt-4 min-h-11 w-full cursor-pointer" type="button" onclick={sendPing}>
      Send a ping
    </button>
    <p
      class="mt-[0.6rem] mb-0 min-h-[1.5em] text-center [font-family:var(--codeFont)] text-[0.7rem]"
      aria-live="polite"
      aria-atomic="true"
    >
      {pingMessage}
    </p>
  </div>
</section>

<style lang="scss">
  .status-light {
    box-shadow: 0 0 0 0.3rem color-mix(in srgb, var(--accent) 18%, transparent);
    animation: beacon 1.8s ease-in-out infinite;
  }

  .radar {
    box-shadow:
      inset 0 0 3rem color-mix(in srgb, var(--accent) 9%, transparent),
      var(--shadow-soft);
  }

  .sweep {
    background: conic-gradient(
      from 250deg,
      transparent 0deg 310deg,
      color-mix(in srgb, var(--accent) 32%, transparent) 355deg,
      var(--accent) 360deg
    );
    animation: radar-sweep 4s linear infinite;
  }

  .signal {
    box-shadow: 0 0 1rem var(--accent);
    transform: translate(-50%, -50%);
    animation: beacon 1.2s ease-in-out infinite;
  }

  .ping-wave {
    transform: translate(-50%, -50%) scale(0.25);
    animation: ping 1.2s ease-out;
  }

  .radar-code {
    text-shadow: 0 0.08em var(--sheet);
    transform: translate(-50%, -50%);
  }

  @keyframes radar-sweep {
    to {
      transform: rotate(1turn);
    }
  }

  @keyframes ping {
    from {
      opacity: 0.8;
      transform: translate(-50%, -50%) scale(0.25);
    }
    to {
      opacity: 0;
      transform: translate(-50%, -50%) scale(5);
    }
  }

  @keyframes beacon {
    50% {
      opacity: 0.45;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .status-light,
    .sweep,
    .signal {
      animation: none;
    }

    .ping-wave {
      opacity: 0.35;
      transform: translate(-50%, -50%) scale(2.5);
      animation: none;
    }

    .route-link {
      transition: none;

      &:hover,
      &:focus-visible {
        transform: none;
      }
    }
  }
</style>
