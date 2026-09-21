function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum);
}

export function calculateViewport({ articleTop, articleHeight, scrollY, viewportHeight }) {
  const safeHeight = Math.max(articleHeight, 1);
  const height = clamp(viewportHeight / safeHeight, 0, 1);
  const scrollableDistance = Math.max(safeHeight - viewportHeight, 0);
  const progress = scrollableDistance
    ? clamp((scrollY - articleTop) / scrollableDistance, 0, 1)
    : 0;

  return {
    top: progress * (1 - height),
    height,
  };
}

export function normalizeBlock({ top, height, kind }, articleHeight) {
  const safeHeight = Math.max(articleHeight, 1);
  const normalizedTop = clamp(top / safeHeight, 0, 1);

  return {
    kind,
    top: normalizedTop,
    height: clamp(height / safeHeight, 0, 1 - normalizedTop),
  };
}
