<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    title: string;
    children: Snippet;
    code?: Snippet;
  }

  let { title, children, code }: Props = $props();
  const id = $props.id();
</script>

<section class="code-step" aria-labelledby={id}>
  <p {id} class="font-semibold">{title}</p>
  {@render children()}
  {#if code}{@render code()}{/if}
</section>
