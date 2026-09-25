<script>
  import "uno.css";

  import "$lib/assets/scss/global.scss";

  import { page } from "$app/state";
  import classNames from "$lib/assets/js/classNames";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import NavigationBeacon from "$lib/components/NavigationBeacon.svelte";
  import { siteLink } from "$lib/config";

  let { children } = $props();
  let path = $derived(page.url.pathname);

  const defaultSeoDescription =
    "Jason Kurian shares notes on web development, thoughtful interfaces, durable systems, and stronger engineering teams.";
  let seoDescription = $derived(page.data.seoDescription?.trim() || defaultSeoDescription);
</script>

<svelte:head>
  {#if page.status < 400 && !page.error}
    <meta name="description" content={seoDescription} />
  {/if}
  <meta name="og:url" content="{siteLink}{path}" />
</svelte:head>

{#if path !== "/"}
  <Header />
{/if}
<main
  id="main"
  tabindex="-1"
  class={classNames(
    "mx-auto",
    path === "/"
      ? ["w-full", "max-w-none", "p-0"]
      : [
          "site-sheet",
          "w-[calc(100%-1rem)]",
          "max-w-64rem",
          "xs:w-[calc(100%-2rem)]",
          "xs:px-12",
          "xs:py-16",
          "sm:px-16",
          "relative",
          "z-2",
          "mt-[-1.25rem]",
          "border",
          "border-[var(--border)]",
          "rounded-1",
          "border-solid",
          "bg-[var(--sheet)]",
          "px-6",
          "py-10",
        ],
  )}
>
  {@render children?.()}
</main>
<NavigationBeacon />
<Footer />

<style>
  :global(.site-sheet) {
    box-shadow: var(--sheet-shadow);
  }
</style>
