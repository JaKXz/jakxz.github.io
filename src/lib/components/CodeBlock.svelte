<script>
  import { onMount } from "svelte";

  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} children
   * @property {string} code
   * @property {string} [lang]
   * @property {string} [title]
   * @property {string} [caption]
   * @property {boolean} [nocopy]
   */

  /** @type {Props} */
  let { children, code, lang, title, caption, nocopy = false } = $props();

  const id = $props.id();
  let ready = $state(false);
  let status = $state("");
  let supportsCommands = false;
  let lastStatus = "";
  let attempt = 0;
  /** @type {ReturnType<typeof setTimeout> | undefined} */
  let timer;

  onMount(() => {
    supportsCommands = "CommandEvent" in window;
    ready = true;

    return () => {
      ready = false;
      clearTimeout(timer);
    };
  });

  async function copy() {
    const currentAttempt = ++attempt;
    clearTimeout(timer);
    status = "";
    let message;

    try {
      await navigator.clipboard.writeText(code);
      message = "Copied";
    } catch {
      message = "Copy failed";
    }

    if (!ready || currentAttempt !== attempt) return;

    // VoiceOver needs a different value to announce consecutive identical results.
    if (message === lastStatus) message += "\u00a0";
    lastStatus = message;
    status = message;
    timer = setTimeout(() => (status = ""), 2000);
  }

  /** @param {CommandEvent} event */
  function handleCommand(event) {
    if (event.command === "--copy") void copy();
  }

  function copyWithoutCommands() {
    if (!supportsCommands) void copy();
  }
</script>

<div class="code-block my-8 min-w-0 border border-[var(--border)] bg-[var(--sheet)]">
  <div
    class="flex min-h-11 flex-wrap items-center gap-x-4 gap-y-1 border-b border-[var(--border)] bg-[var(--sheet-muted)] px-4 py-2 font-mono text-xs"
  >
    <span class="min-w-0 flex-1 break-words">{title || lang || "Code"}</span>
    {#if !title && lang}
      <span class="text-[var(--muted-ink)]">{lang}</span>
    {/if}
    <span class="text-[var(--muted-ink)]" role="status">{status}</span>
    {#if ready && !nocopy}
      <button
        type="button"
        class="min-h-6 min-w-6 cursor-pointer border border-[var(--border)] bg-[var(--sheet)] px-2 py-1 text-[var(--ink)] hover:border-[var(--accent)]"
        command="--copy"
        commandfor={id}
        onclick={copyWithoutCommands}
      >
        Copy<span class="sr-only"> {title || lang || "code"}</span>
      </button>
    {/if}
  </div>
  <!-- svelte-ignore a11y_no_noninteractive_tabindex (Scrollable code must be keyboard accessible.) -->
  <div
    {id}
    class="code-scroll overflow-x-auto focus-visible:outline-offset-[-3px]"
    role="region"
    aria-label={title || (lang ? `${lang} code` : "Code example")}
    tabindex="0"
    oncommand={handleCommand}
  >
    {@render children()}
  </div>
  {#if caption}
    <div class="border-t border-[var(--border)] px-4 py-3 text-sm text-[var(--muted-ink)]">
      {caption}
    </div>
  {/if}
</div>

<style>
  .code-scroll {
    position: relative;
  }

  .code-scroll :global(pre) {
    width: max-content;
    min-width: 100%;
    max-width: none;
    margin: 0;
    overflow: visible;
  }
</style>
