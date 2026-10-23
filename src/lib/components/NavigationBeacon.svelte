<script>
  import { navigating } from "$app/state";

  let visible = $state(false);
  let loading = $state(false);
  let fading = $state(false);
  let branch = $state("top");
  let cycle = $state(0);
  let navigationId = 0;
  let fadeTimeout;

  function chooseBranch() {
    branch = Math.random() < 0.5 ? "top" : "bottom";
  }

  function finishCycle() {
    if (loading) {
      chooseBranch();
      cycle += 1;
    } else {
      const id = navigationId;
      fading = true;
      fadeTimeout = setTimeout(() => {
        if (id !== navigationId) return;
        visible = false;
        fading = false;
      }, 200);
    }
  }

  function cancelCycle() {
    if (loading) return;
    clearTimeout(fadeTimeout);
    visible = false;
    fading = false;
  }

  $effect(() => {
    const destination = navigating.to;
    if (!destination) {
      loading = false;
      return;
    }

    const id = ++navigationId;
    clearTimeout(fadeTimeout);
    fading = false;
    if (navigating.willUnload) {
      loading = false;
      visible = false;
      return;
    }

    const complete = navigating.complete;
    loading = true;
    visible = false;

    const timeout = setTimeout(() => {
      if (id !== navigationId || !loading) return;
      chooseBranch();
      cycle += 1;
      visible = true;
    }, 300);

    complete.then(
      () => {
        if (id !== navigationId) return;
        loading = false;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          visible = false;
        }
      },
      () => {
        if (id !== navigationId) return;
        loading = false;
        clearTimeout(fadeTimeout);
        fading = false;
        visible = false;
      },
    );

    return () => clearTimeout(timeout);
  });
</script>

<span class="sr-only" role="status" aria-live="polite">
  {visible && loading ? "Loading page" : ""}
</span>

{#if visible}
  {#key cycle}
    <span
      class="rounded-1 xs:right-8 xs:bottom-8 pointer-events-none fixed top-4 right-4 z-30 grid h-14 w-28 place-items-center overflow-hidden border border-[var(--border)] bg-[var(--sheet)] [box-shadow:var(--shadow-soft)] transition-opacity duration-200 ease-out motion-reduce:transition-none"
      class:opacity-0={fading}
      aria-hidden="true"
    >
      <svg class="h-full w-full" viewBox="0 0 80 36" fill="none" aria-hidden="true">
        <path d="M15 18h19L61 9M34 18l27 9" stroke="var(--border-strong)" stroke-width="1.5" />
        <path
          class="research-route"
          d={branch === "top" ? "M15 18h19L61 9" : "M15 18h19L61 27"}
          stroke="var(--accent)"
          stroke-width="2"
          stroke-linecap="round"
          onanimationend={finishCycle}
          onanimationcancel={cancelCycle}
        />
        <circle cx="15" cy="18" r="3.5" fill="var(--accent)" />
        <circle cx="34" cy="18" r="3.5" fill="var(--sheet-muted)" stroke="var(--border-strong)" />
        <circle class="research-junction" cx="34" cy="18" r="3.5" fill="var(--accent)" />
        <circle cx="61" cy="27" r="3.5" fill="var(--sheet-muted)" stroke="var(--border-strong)" />
        <circle cx="61" cy="9" r="3.5" fill="var(--sheet-muted)" stroke="var(--border-strong)" />
        <circle
          class="research-target"
          cx="61"
          cy={branch === "top" ? 9 : 27}
          r="3.5"
          fill="var(--accent)"
        />
      </svg>
    </span>
  {/key}
{/if}

<style>
  .research-route {
    stroke-dasharray: 50;
    stroke-dashoffset: 50;
    animation: research-trace 1.1s linear both;
  }

  .research-target {
    opacity: 0;
    animation: research-discover 1.1s steps(1, end) both;
  }

  .research-junction {
    opacity: 0;
    animation: research-connect 1.1s steps(1, end) both;
  }

  @keyframes research-trace {
    0%,
    5% {
      stroke-dashoffset: 50;
    }
    60%,
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes research-discover {
    0%,
    59% {
      opacity: 0;
    }
    60%,
    100% {
      opacity: 1;
    }
  }

  @keyframes research-connect {
    0%,
    26% {
      opacity: 0;
    }
    27%,
    100% {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .research-route,
    .research-junction,
    .research-target {
      animation: none;
    }

    .research-route {
      stroke-dashoffset: 0;
    }

    .research-junction,
    .research-target {
      opacity: 1;
    }
  }
</style>
