<script>
  import "uno.css";

  import "$lib/assets/scss/global.scss";

  import { preloadData } from "$app/navigation";
  import classNames from "$lib/assets/js/classNames";
  import { isHomepagePreviewPath } from "$lib/assets/js/homepage-previews";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import { navItems, siteAuthorTwitter, siteLink } from "$lib/config";
  import { onMount } from "svelte";

  let { data, children } = $props();
  let isHomepagePreview = $derived(isHomepagePreviewPath(data.path));
  let isSidebarPreview = $derived(/^\/homepage-preview\/sidebar\/?$/.test(data.path));

  /**
   * This pre-fetches all top-level routes on the site in the background for faster loading.
   * https://kit.svelte.dev/docs#modules-$app-navigation
   *
   * Any route added in src/lib/config.js will be prefetched automatically. You can add your
   * own preloadData() calls here, too.
   **/
  onMount(() => {
    navItems.forEach((item) => preloadData(item.route));
  });
</script>

<svelte:head>
  <meta name="og:url" content="{siteLink}{data.path}" />
  <meta name="twitter:site" content={siteAuthorTwitter} />
  <meta name="twitter:creator" content={siteAuthorTwitter} />
</svelte:head>

{#if data.path !== "/" && !isHomepagePreview}
  <Header />
{/if}
<main
  id="main"
  tabindex="-1"
  class={classNames(
    "mx-auto",
    data.path === "/"
      ? ["px-8", "xs:max-w-42rem"]
      : isHomepagePreview
        ? ["homepage-preview-main", "w-full", "max-w-none", "p-0"]
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
            "rounded-[0.5rem]",
            "border-solid",
            "bg-[var(--sheet)]",
            "px-6",
            "py-10",
          ],
  )}
>
  {@render children?.()}
</main>
<Footer path={isHomepagePreview ? "/" : data.path} alignWithSidebar={isSidebarPreview} />

<style>
  :global(.site-sheet) {
    box-shadow: var(--sheet-shadow);
  }
</style>
