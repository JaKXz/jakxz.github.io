export const THEME_STORAGE_KEY = "theme";

export let theme = $state({ current: resolveTheme(getStoredTheme()) });

export function resolveTheme(storedTheme, prefersDark = false) {
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return prefersDark ? "dark" : "light";
}

export function getStoredTheme(storage = localStorage) {
  try {
    return storage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function saveTheme(theme, storage = localStorage) {
  try {
    storage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // The active theme still applies when storage is unavailable.
  }
}

export function applyTheme(nextTheme, root = document.documentElement) {
  theme.current = nextTheme;
  root.dataset.theme = nextTheme;
  root.style.colorScheme = nextTheme;
}
