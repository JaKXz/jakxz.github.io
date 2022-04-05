<script context="module">
  export const load = async () => {
    const { default: ReadMe } = await import("../../README.md");

    return {
      props: {
        ReadMe,
      },
    };
  };
</script>

<script>
  import { siteDescription, siteTitle } from "$lib/config";

  export let ReadMe;
</script>

<svelte:head>
  <title>{siteTitle} | {siteDescription}</title>
</svelte:head>

<svelte:component this={ReadMe} />
