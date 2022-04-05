<div class="callout">
  <slot />
</div>

<style>
  .callout {
    background: var(--lightAccent);
    padding: 2rem;
    width: calc(100% + 3rem);
    max-width: unset;
    margin: 2rem 0 2rem -2rem;
    font-style: italic;
    border-radius: 0.125rem;
  }
</style>
