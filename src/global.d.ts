/// <reference types="@sveltejs/kit" />

declare module "*.md" {
  const component: import("svelte").Component;
  export default component;
  export const metadata: Record<string, unknown> | undefined;
}
