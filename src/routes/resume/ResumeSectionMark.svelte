<script>
  /** @type {{ kind: "technical" | "experience" | "open-source" | "education" }} */
  let { kind } = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="1em"
  height="1em"
  class="me-[0.15em] inline-block align-[-0.12em] print:text-black"
  fill="none"
  stroke="currentColor"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
  focusable="false"
>
  {#if kind === "technical"}
    <path d="M17.3 6.7a7.5 7.5 0 1 0 0 10.6M12 2v3m0 14v3M2 12h3m14 0h3" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  {:else if kind === "experience"}
    <path d="M4 19c0-6 8-1 8-7s8-2 8-8" />
    <g fill="currentColor" stroke="none">
      <circle cx="4" cy="19" r="1.75" />
      <circle cx="12" cy="12" r="1.75" />
      <circle cx="20" cy="4" r="1.75" />
    </g>
  {:else if kind === "open-source"}
    <path
      d="M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8M8.8 8.8a4.5 4.5 0 0 0 0 6.4M15.2 8.8a4.5 4.5 0 0 1 0 6.4"
    />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  {:else if kind === "education"}
    <path d="M13 2.5c4.5-.5 6 3 7.5 6s2 7-1.5 10S9 22 5 19 2 12 4.5 8 8.5 3 13 2.5Z" />
    <path d="M13 6c3-.5 4 2 5 4.5s.5 5-2.5 6.5-6.5 1.5-8.5-.5-1-5 1-7S10 6.5 13 6Z" />
    <path d="M13 9c2-.5 3 1 3 3s-2 3-4 2.5-3-2-2-3.5 1.5-1.5 3-2Z" />
    <circle cx="13" cy="11.75" r="0.75" fill="currentColor" stroke="none" />
  {/if}
</svg>
