<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  import { applyTheme, getStoredTheme, resolveTheme, saveTheme } from "$lib/assets/js/theme";

  let theme = $state("light");
  let transitionDuration = $state(0);
  let followsSystem = true;

  let nextTheme = $derived(theme === "dark" ? "light" : "dark");

  onMount(() => {
    const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const storedTheme = getStoredTheme();
    followsSystem = storedTheme !== "light" && storedTheme !== "dark";

    theme = resolveTheme(
      document.documentElement.dataset.theme || storedTheme,
      colorScheme.matches,
    );
    applyTheme(theme);
    transitionDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 140;

    const followSystemTheme = (event) => {
      if (followsSystem) {
        theme = resolveTheme(null, event.matches);
        applyTheme(theme);
      }
    };

    colorScheme.addEventListener("change", followSystemTheme);

    return () => colorScheme.removeEventListener("change", followSystemTheme);
  });

  function toggleTheme() {
    theme = nextTheme;
    followsSystem = false;
    applyTheme(theme);
    saveTheme(theme);
  }
</script>

<button
  type="button"
  class="theme-toggle rounded-1 m-0 inline-grid h-8 w-8 shrink-0 cursor-pointer place-items-center border border-[var(--border)] bg-[var(--sheet)] p-0 text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:border-[var(--accent)]"
  aria-label={`Switch to ${nextTheme} theme`}
  title={`Switch to ${nextTheme} theme`}
  aria-pressed={theme === "dark"}
  onclick={toggleTheme}
>
  {#key theme}
    {#if theme === "dark"}
      <span
        class="i-radix-icons-sun h-4 w-4"
        aria-hidden="true"
        transition:fade={{ duration: transitionDuration }}
      ></span>
    {:else}
      <span
        class="i-radix-icons-moon h-4 w-4"
        aria-hidden="true"
        transition:fade={{ duration: transitionDuration }}
      ></span>
    {/if}
  {/key}
</button>

<style>
  .theme-toggle {
    transition:
      color 150ms ease,
      border-color 150ms ease,
      background 150ms ease;
  }

  @media (prefers-reduced-motion: reduce) {
    .theme-toggle {
      transition: none;
    }
  }
</style>
