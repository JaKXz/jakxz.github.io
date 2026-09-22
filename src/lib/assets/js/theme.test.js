import { expect, test } from "vite-plus/test";

import { applyTheme, getStoredTheme, resolveTheme, saveTheme } from "./theme";

test("uses a valid saved theme before the system preference", () => {
  expect(resolveTheme("light", true)).toBe("light");
  expect(resolveTheme("dark", false)).toBe("dark");
});

test("uses the system preference when no valid theme is saved", () => {
  expect(resolveTheme(null, true)).toBe("dark");
  expect(resolveTheme("sepia", false)).toBe("light");
});

test("reads and writes the theme through the supplied storage", () => {
  const values = new Map();
  const storage = {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };

  saveTheme("dark", storage);

  expect(getStoredTheme(storage)).toBe("dark");
});

test("continues when storage is unavailable", () => {
  const storage = {
    getItem: () => {
      throw new Error("blocked");
    },
    setItem: () => {
      throw new Error("blocked");
    },
  };

  expect(getStoredTheme(storage)).toBeNull();
  expect(() => saveTheme("dark", storage)).not.toThrow();
});

test("applies theme state to the document root contract", () => {
  const root = { dataset: {}, style: {} };

  applyTheme("dark", root);

  expect(root.dataset.theme).toBe("dark");
  expect(root.style.colorScheme).toBe("dark");
});
