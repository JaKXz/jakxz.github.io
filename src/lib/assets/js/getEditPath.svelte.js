import { page } from "$app/state";

export default function getEditPath(pathname = page.url.pathname) {
  if (page.status > 399) {
    return "/src/routes/+error.svelte";
  }

  const path = pathname.slice(0, -1);
  if (path.startsWith("/learning/")) {
    return `${path.replace("/learning", "/src/lib/posts")}.md`;
  }
  return (
    {
      "/resume/": "/src/routes/resume/+page.md",
    }[pathname] || `/src/routes${pathname}+page.svelte`
  );
}
