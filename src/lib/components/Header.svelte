<script>
  import { isMenuOpen } from "$lib/assets/js/store";

  import HamburgerMenuButton from "./HamburgerMenuButton.svelte";
  import MainNav from "./MainNav.svelte";
</script>

<header
  class="site-header max-w-60rem xs:mt-8 xs:px-8 relative mx-auto mt-4 flex min-h-20 w-[calc(100%-2rem)] items-center justify-between gap-4 rounded-[0.5rem] border border-[var(--border)] bg-[var(--sheet-muted)] px-5 pt-5 pb-7 text-[var(--ink)]"
  style:z-index={$isMenuOpen ? 40 : 1}
>
  <a class="skip-to-content-link" href="#main"> Skip to main content </a>

  <a
    href="/"
    class="site-title color-inherit m-0 block w-fit text-center text-[2.5rem] leading-none italic no-underline"
  >
    <div class="name-heading inline-block w-fit">Jason</div>
    <div class="name-heading inline-block w-fit">Kurian</div>
  </a>

  <div class="flex items-center gap-3">
    <MainNav />
    <HamburgerMenuButton />
  </div>
</header>

<style lang="scss">
  .site-header {
    box-shadow: var(--shadow-soft);
  }
</style>
