<script>
  import { page } from "$app/state";
  import { isMenuOpen } from "$lib/assets/js/store";

  let { href, children, mobile = false } = $props();

  let isCurrentPage = $derived(page.url.pathname.startsWith(href));
</script>

<li>
  <a
    {href}
    onclick={() => isMenuOpen.set(false)}
    class="nav-link block px-3 py-2 text-sm font-600 tracking-wide"
    class:text-2xl={mobile}
    class:active={isCurrentPage}
    aria-current={isCurrentPage ? "page" : undefined}
  >
    {@render children?.()}
  </a>
</li>

<style>
  .nav-link {
    color: var(--ink);
    text-decoration-color: transparent;
    text-decoration-thickness: 0.13em;
    text-underline-offset: 0.32em;
  }

  .nav-link:hover,
  .nav-link:focus-visible,
  .nav-link.active {
    color: var(--accent);
    text-decoration-color: currentColor;
  }
</style>
