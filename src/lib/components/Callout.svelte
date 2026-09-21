<script>
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();
</script>

<div class="callout">
  {@render children?.()}
</div>

<style lang="scss">
  .callout {
    padding: 1.5rem;
    color: var(--ink);
    background: var(--sheet-muted);
    border: 1px solid var(--border);
    border-left: 0.3rem solid var(--accent);

    :global(> :first-child) {
      margin-top: 0;
    }

    :global(> :last-child) {
      margin-bottom: 0;
    }
  }
</style>
