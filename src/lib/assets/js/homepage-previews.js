export const HOMEPAGE_PREVIEW_VARIANTS = ["chapters", "single-sheet", "sidebar"];

export function isHomepagePreviewVariant(variant) {
  return HOMEPAGE_PREVIEW_VARIANTS.includes(variant);
}

export function isHomepagePreviewPath(path) {
  if (/^\/homepage-preview\/?$/.test(path)) return true;

  const match = /^\/homepage-preview\/([^/]+)\/?$/.exec(path);
  return match ? isHomepagePreviewVariant(match[1]) : false;
}
