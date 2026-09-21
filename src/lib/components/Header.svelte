<script>
  import { isMenuOpen } from "$lib/assets/js/store";

  import HamburgerMenuButton from "./HamburgerMenuButton.svelte";
  import MainNav from "./MainNav.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";
</script>

<header
  class="site-header relative mx-auto mt-4 min-h-20 w-[calc(100%-2rem)] max-w-60rem flex items-center justify-between gap-4 border border-[var(--border)] rounded-[0.5rem] bg-[var(--sheet-muted)] px-5 pb-7 pt-5 text-[var(--ink)] xs:mt-8 xs:px-8"
  style:z-index={$isMenuOpen ? 40 : 1}
>
  <a class="skip-to-content-link" href="#main"> Skip to main content </a>

  <a
    href="/"
    class="site-title m-0 block w-fit text-center text-[2.5rem] color-inherit leading-none italic no-underline"
  >
    <div class="name-heading inline-block w-fit">Jason</div>
    <div class="name-heading inline-block w-fit">Kurian</div>
  </a>

  <div class="flex items-center gap-3">
    <MainNav />
    <ThemeToggle />
    <HamburgerMenuButton />
  </div>
</header>

<style lang="scss">
  .site-header {
    box-shadow: var(--shadow-soft);
  }

  .signature-mark {
    font-family: var(--accentFont);
    transform: rotate(-6deg);
  }
</style>
