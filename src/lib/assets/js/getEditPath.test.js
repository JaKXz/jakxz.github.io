import { beforeEach, expect, test, vi } from "vite-plus/test";

import getEditPath from "./getEditPath.svelte";

const mockPage = vi.hoisted(() => ({
  status: 200,
  url: new URL("https://jasonkurian.dev/"),
}));

vi.mock("$app/state", () => ({ page: mockPage }));

beforeEach(() => {
  mockPage.status = 200;
  mockPage.url = new URL("https://jasonkurian.dev/");
});

test("maps the root pathname to the home page source", () => {
  expect(getEditPath("/")).toBe("/src/routes/+page.svelte");
});

test("uses the current page pathname when no pathname is supplied", () => {
  mockPage.url = new URL("https://jasonkurian.dev/coaching/");

  expect(getEditPath()).toBe("/src/routes/coaching/+page.svelte");
});

test("preserves a trailing slash as the separator before a route page filename", () => {
  expect(getEditPath("/coaching/")).toBe("/src/routes/coaching/+page.svelte");
});

test("maps the resume pathname to its Markdown source", () => {
  expect(getEditPath("/resume/")).toBe("/src/routes/resume/+page.md");
});

test("removes the trailing slash from a learning pathname before adding the Markdown extension", () => {
  expect(getEditPath("/learning/reviewing-code-familiar-or-not/")).toBe(
    "/src/lib/posts/reviewing-code-familiar-or-not.md",
  );
});

test.each([400, 404, 500])("maps a %i response to the error page source", (status) => {
  mockPage.status = status;

  expect(getEditPath("/learning/reviewing-code-familiar-or-not/")).toBe(
    "/src/routes/+error.svelte",
  );
});

test("maps normally below the error status boundary", () => {
  mockPage.status = 399;

  expect(getEditPath("/coaching/")).toBe("/src/routes/coaching/+page.svelte");
});
