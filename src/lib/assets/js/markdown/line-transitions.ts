/**
 * Match equal source lines in occurrence order; numbering and annotations are not identity.
 */
export function matchLines(before: string[], after: string[]) {
  const occurrences = new Map<string, { indices: number[]; used: number }>();
  before.forEach((text, index) => {
    const entry = occurrences.get(text) ?? { indices: [], used: 0 };
    entry.indices.push(index);
    occurrences.set(text, entry);
  });
  const matches: { from: number; to: number }[] = [];
  const added: number[] = [];
  const matched = new Set<number>();
  after.forEach((text, to) => {
    const entry = occurrences.get(text);
    const from = entry?.indices[entry.used];
    if (!entry || from === undefined) added.push(to);
    else {
      entry.used++;
      matched.add(from);
      matches.push({ from, to });
    }
  });
  return {
    matches,
    added,
    removed: before.map((_, index) => index).filter((index) => !matched.has(index)),
  };
}

function rows(panel: HTMLElement | undefined) {
  return Array.from(
    panel?.querySelectorAll<HTMLElement>("pre > code > .l, pre > code > .code-annotated-line") ??
      [],
  )
    .map((element) => {
      const copy = element.cloneNode(true) as HTMLElement;
      copy.querySelectorAll(".ln, .code-note").forEach((part) => part.remove());
      return { element, text: copy.textContent ?? "", rect: element.getBoundingClientRect() };
    })
    .filter((row) => row.rect.height > 0);
}

/** One controller per walkthrough. It owns only transient animations and inert exit snapshots. */
export function createLineAnimator() {
  let generation = 0;
  const animations = new Set<Animation>();
  const overlays = new Set<HTMLElement>();

  function cancel() {
    generation++;
    for (const animation of animations) animation.cancel();
    for (const overlay of overlays) overlay.remove();
    animations.clear();
    overlays.clear();
  }

  async function change(
    previous: HTMLElement | undefined,
    next: HTMLElement | undefined,
    update: () => Promise<void>,
    motion: boolean,
  ) {
    cancel();
    const current = generation;
    const enabled = motion && typeof Element.prototype.animate === "function";
    const before = enabled ? rows(previous) : [];
    await update();
    if (!enabled || current !== generation || !next?.isConnected) return;
    const after = rows(next);
    const { matches, added, removed } = matchLines(
      before.map((row) => row.text),
      after.map((row) => row.text),
    );
    const running: Animation[] = [];
    const animate = (element: HTMLElement, keyframes: Keyframe[]) => {
      const animation = element.animate(keyframes, { duration: 220, easing: "ease-out" });
      animations.add(animation);
      running.push(animation);
    };
    for (const { from, to } of matches) {
      const old = before[from].rect;
      const row = after[to];
      animate(row.element, [
        { transform: `translate(${old.left - row.rect.left}px, ${old.top - row.rect.top}px)` },
        { transform: "translate(0, 0)" },
      ]);
    }
    for (const index of added) animate(after[index].element, [{ opacity: 0 }, { opacity: 1 }]);

    const viewport = next.querySelector(".code-scroll");
    const oldPre = previous?.querySelector("pre");
    let overlay;
    if (viewport instanceof HTMLElement && oldPre && removed.length) {
      const bounds = viewport.getBoundingClientRect();
      overlay = oldPre.cloneNode(false) as HTMLElement;
      overlay.removeAttribute("id");
      overlay.setAttribute("aria-hidden", "true");
      overlay.inert = true;
      overlay.classList.add("code-transition-exits");
      Object.assign(overlay.style, {
        position: "absolute",
        pointerEvents: "none",
        overflow: "clip",
        background: "transparent",
        padding: "0",
        margin: "0",
        border: "0",
        minWidth: "0",
        left: `${viewport.scrollLeft}px`,
        top: `${viewport.scrollTop}px`,
        width: `${viewport.clientWidth}px`,
        height: `${viewport.clientHeight}px`,
      });
      for (const index of removed) {
        const row = before[index];
        const clone = row.element.cloneNode(true) as HTMLElement;
        clone.removeAttribute("id");
        clone.querySelectorAll("[id]").forEach((element) => element.removeAttribute("id"));
        Object.assign(clone.style, {
          position: "absolute",
          margin: "0",
          transform: "none",
          top: `${row.rect.top - bounds.top}px`,
          left: `${row.rect.left - bounds.left}px`,
          width: `${row.rect.width}px`,
          maxWidth: "none",
        });
        overlay.append(clone);
        animate(clone, [{ opacity: 1 }, { opacity: 0 }]);
      }
      viewport.append(overlay);
      overlays.add(overlay);
    }
    await Promise.allSettled(running.map((animation) => animation.finished));
    for (const animation of running) animations.delete(animation);
    overlay?.remove();
    if (overlay) overlays.delete(overlay);
  }

  return { change, cancel };
}
