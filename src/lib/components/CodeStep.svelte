<script>
  /** @type {{title: string, children: import('svelte').Snippet, code?: import('svelte').Snippet}} */
  let { title, children, code } = $props();
  const id = $props.id();
</script>

<section class="code-step" aria-labelledby={id}>
  <p {id} class="font-semibold">{title}</p>
  {@render children()}
  {#if code}{@render code()}{/if}
</section>
