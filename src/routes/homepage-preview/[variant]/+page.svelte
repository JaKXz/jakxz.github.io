<script>
  import HomepageChapters from "$lib/components/HomepageChapters.svelte";
  import HomepageSidebar from "$lib/components/HomepageSidebar.svelte";
  import HomepageSingleSheet from "$lib/components/HomepageSingleSheet.svelte";
  import { siteTitle } from "$lib/config";

  let { data } = $props();
</script>

<svelte:head>
  <title>{siteTitle} | Homepage preview: {data.variant}</title>
  <meta name="robots" content="noindex, nofollow" />
</svelte:head>

{#if data.variant === "chapters"}
  <HomepageChapters posts={data.posts} />
{:else if data.variant === "single-sheet"}
  <HomepageSingleSheet posts={data.posts} />
{:else if data.variant === "sidebar"}
  <HomepageSidebar posts={data.posts} />
{/if}
