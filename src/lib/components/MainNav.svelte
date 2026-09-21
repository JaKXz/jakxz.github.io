<script>
  import { tick } from "svelte";
  import { fade, fly } from "svelte/transition";

  import { isMenuOpen } from "$lib/assets/js/store";
  import { navItems } from "$lib/config";
  import HamburgerMenuButton from "./HamburgerMenuButton.svelte";
  import NavItem from "./NavItem.svelte";

  let motionDuration = $state(180);

  $effect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const updateMotionPreference = () => {
      motionDuration = mediaQuery.matches ? 0 : 180;
    };
    const closeOnDesktop = () => {
      if (desktopQuery.matches) isMenuOpen.set(false);
    };

    updateMotionPreference();
    closeOnDesktop();
    mediaQuery.addEventListener("change", updateMotionPreference);
    desktopQuery.addEventListener("change", closeOnDesktop);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
      desktopQuery.removeEventListener("change", closeOnDesktop);
    };
  });

  $effect(() => {
    if (!$isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  });

  async function closeMenu() {
    isMenuOpen.set(false);
    await tick();
    document.querySelector("header .menu-button")?.focus();
  }

  function handleKeydown(event) {
    if (!$isMenuOpen) return;

    if (event.key === "Escape") {
      closeMenu();
      return;
    }

    if (event.key !== "Tab") return;

    const menu = document.querySelector("#mobile-navigation");
    const focusable = Array.from(menu?.querySelectorAll("button, a[href]") ?? []);
    const first = focusable[0];
    const last = focusable.at(-1);

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<nav aria-label="Main Navigation" class="main-nav hidden sm:block">
  <ul class="m-0 flex list-none items-center gap-2 p-0">
    {#each navItems as navItem (navItem.route)}
      <NavItem href={navItem.route}>{navItem.title}</NavItem>
    {/each}
  </ul>
</nav>

{#if $isMenuOpen}
  <div
    class="fixed inset-0 z-30 bg-[var(--canvas)] p-4 sm:hidden"
    transition:fade={{ duration: motionDuration }}
  >
    <nav
      id="mobile-navigation"
      aria-label="Main Navigation"
      class="mobile-nav mx-auto h-full max-w-128 flex flex-col border border-[var(--border-strong)] bg-[var(--sheet)] p-5"
      transition:fly={{ x: 32, duration: motionDuration }}
    >
      <div class="flex justify-end">
        <HamburgerMenuButton closeOnly={true} />
      </div>
      <ul class="m-auto flex list-none flex-col items-center gap-5 p-0 text-center">
        {#each navItems as navItem (navItem.route)}
          <NavItem href={navItem.route} mobile={true}>{navItem.title}</NavItem>
        {/each}
      </ul>
      <p class="m-0 text-center text-xs text-[var(--muted-ink)]">Press Esc to close</p>
    </nav>
  </div>
{/if}

<style>
  .mobile-nav {
    box-shadow: var(--shadow-deep);
  }
</style>
