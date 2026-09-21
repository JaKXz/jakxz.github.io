<script>
  import { onMount, tick } from "svelte";

  import { isMenuOpen } from "$lib/assets/js/store";
  import HamburgerSVG from "./svg/HamburgerSVG.svelte";
  import XSVG from "./svg/XSVG.svelte";

  let { closeOnly = false } = $props();
  let button;

  onMount(() => {
    if (closeOnly) button.focus();
  });

  async function toggleIsMenuOpen() {
    const willOpen = !$isMenuOpen;
    isMenuOpen.set(willOpen);

    if (!willOpen) {
      await tick();
      document.querySelector("header .menu-button")?.focus();
    }
  }
</script>

<button
  bind:this={button}
  onclick={toggleIsMenuOpen}
  aria-controls="mobile-navigation"
  aria-expanded={closeOnly ? undefined : $isMenuOpen}
  aria-label={closeOnly ? "Close navigation" : "Open navigation"}
  class="menu-button h-10 w-10 inline-grid cursor-pointer place-items-center border border-[var(--border)] bg-[var(--sheet)] p-0 text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] sm:hidden"
  tabindex={$isMenuOpen || !closeOnly ? "0" : "-1"}
>
  {#if closeOnly}
    <XSVG />
  {:else}
    <HamburgerSVG />
  {/if}
</button>

<style>
  .menu-button :global(svg) {
    width: 1.35rem;
    height: 1.35rem;
  }

  .menu-button:focus-visible {
    outline: 3px solid var(--focus-ring);
    outline-offset: 3px;
  }
</style>
