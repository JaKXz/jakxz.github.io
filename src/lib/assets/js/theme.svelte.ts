export const THEME_STORAGE_KEY = "theme";

export type Theme = "light" | "dark";
export interface ThemeRoot {
  dataset: { theme?: string };
  style: { colorScheme?: string };
}

export let theme = $state({ current: resolveTheme(getStoredTheme()) });

export function resolveTheme(storedTheme: string | null | undefined, prefersDark = false): Theme {
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return prefersDark ? "dark" : "light";
}

export function getStoredTheme(storage: Pick<Storage, "getItem"> = localStorage) {
  try {
    return storage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function saveTheme(theme: Theme, storage: Pick<Storage, "setItem"> = localStorage) {
  try {
    storage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // The active theme still applies when storage is unavailable.
  }
}

export function applyTheme(nextTheme: Theme, root: ThemeRoot = document.documentElement) {
  theme.current = nextTheme;
  root.dataset.theme = nextTheme;
  root.style.colorScheme = nextTheme;
}
