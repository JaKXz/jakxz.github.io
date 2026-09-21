<script>
  import { page } from "$app/state";
  import classNames from "$lib/assets/js/classNames";

  import ThemeToggle from "./ThemeToggle.svelte";

  let { alignWithSidebar = false } = $props();
  let path = $derived(page.url.pathname);

  function getEditPath(url) {
    if (url.startsWith("/learning/")) {
      return `${url.replace("/learning", "/src/lib/posts")}.md`;
    }
    return (
      {
        "/resume": "/src/routes/resume/+page.md",
      }[url] || `/src/routes${url}/+page.svelte`
    );
  }
</script>

<footer
  class={classNames(
    "site-footer relative z-1 mx-auto -mt-4 mb-6 border border-[var(--border)] px-5 py-8 bg-[var(--sheet-muted)] text-sm text-[var(--muted-ink)]",
    alignWithSidebar
      ? ["w-[calc(100%-2rem)]", "max-w-64rem", "xs:w-[calc(100%-4rem)]"]
      : ["w-[calc(100%-2rem)]", "max-w-60rem"],
  )}
>
  <div class="grid gap-8 sm:grid-cols-[auto_1fr]">
    <div class="flex flex-col gap-4">
      <div>
        <ThemeToggle />
      </div>
      <!-- <p class="text-xs font-600 uppercase tracking-[0.18em]">Elsewhere</p> -->
      <ul class="flex list-none flex-wrap gap-2 p-0 m-0">
        <li class="m-0 p-0">
          <a
            class="social-link h-11"
            href="https://bsky.app/profile/jasonkurian.dev"
            aria-label="Bluesky"
          >
            <svg viewBox="0 0 16 16" height="1rem" width="1rem" fill="currentColor">
              <path
                d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.697-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948Z"
              />
            </svg>
            <span>Bluesky</span>
          </a>
        </li>
        <li class="m-0 p-0">
          <a class="social-link h-11" href="https://github.com/jakxz">
            <i class="i-radix-icons-github-logo text-base"></i>
            <span>GitHub</span>
          </a>
        </li>
        <li class="m-0 p-0">
          <a
            class="social-link h-11"
            href="https://www.linkedin.com/in/jgkurian/"
            rel="me noopener noreferrer"
          >
            <i class="i-radix-icons-linkedin-logo text-base"></i>
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="sm:text-right flex flex-col justify-between">
      <nav
        aria-label="Footer Navigation"
        class="flex flex-wrap gap-x-4 gap-y-2 sm:justify-end"
      >
        <a href="/">Home</a>
        <a href="/learning">Learning</a>
        <a href="/api/rss.xml" rel="external">RSS</a>
      </nav>
      {#if page.status !== 404 && path !== "/learning" && !path.startsWith("/learning/category/")}
        <p class="m-0">
          See a typo?
          <em
            ><a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={`https://github.com/jakxz/jakxz.github.io/edit/develop${getEditPath(path)}`}
              >Open a PR here.</a
            ></em
          >
          Thank you!
        </p>
      {/if}
      <p class="m-0">© {new Date().getFullYear()} Jason Kurian</p>
    </div>
  </div>
</footer>

<style lang="scss">
  .site-footer {
    box-shadow: var(--shadow-soft);

    a {
      color: var(--ink);
      text-underline-offset: 0.25em;
    }
  }

  .social-link {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.5rem 0.7rem;
    border: 1px solid var(--border);
    background: var(--sheet);
    text-decoration: none;
    transition:
      color 120ms ease-out,
      border-color 120ms ease-out;

    &:hover,
    &:focus-visible {
      color: var(--accent);
      border-color: var(--accent);
    }
  }
</style>
