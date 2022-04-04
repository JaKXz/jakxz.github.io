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
  export let ReadMe;
</script>

<svelte:head>
  <title>SvelteKit Static Blog Starter</title>
</svelte:head>

<svelte:component this={ReadMe} />
