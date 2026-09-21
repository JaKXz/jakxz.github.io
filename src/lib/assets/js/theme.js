export const THEME_STORAGE_KEY = "theme";

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

export function applyTheme(theme, root = document.documentElement) {
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}
