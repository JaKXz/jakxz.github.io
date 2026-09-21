import { error } from "@sveltejs/kit";

import fetchPosts from "$lib/assets/js/fetchPosts";
import {
  HOMEPAGE_PREVIEW_VARIANTS,
  isHomepagePreviewVariant,
} from "$lib/assets/js/homepage-previews";

export function entries() {
  return HOMEPAGE_PREVIEW_VARIANTS.map((variant) => ({ variant }));
}

export async function load({ params }) {
  if (!isHomepagePreviewVariant(params.variant)) {
    throw error(404, "Unknown homepage preview");
  }

  try {
    const { posts } = await fetchPosts({ limit: 4, sort: "updated" });
    return { posts, variant: params.variant };
  } catch (err) {
    console.error(err.stack);
    throw error(500, err.message);
  }
}
