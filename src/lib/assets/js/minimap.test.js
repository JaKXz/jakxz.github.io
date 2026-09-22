import { expect, test } from "vite-plus/test";

import { calculateViewport, normalizeBlock } from "./minimap";

test("pins the viewport to the beginning before the article", () => {
  expect(
    calculateViewport({
      articleTop: 400,
      articleHeight: 2000,
      scrollY: 0,
      viewportHeight: 500,
    }),
  ).toEqual({ top: 0, height: 0.25 });
});

test("maps progress through a long article", () => {
  expect(
    calculateViewport({
      articleTop: 100,
      articleHeight: 2000,
      scrollY: 850,
      viewportHeight: 500,
    }),
  ).toEqual({ top: 0.375, height: 0.25 });
});

test("pins the viewport to the end after the article", () => {
  expect(
    calculateViewport({
      articleTop: 100,
      articleHeight: 2000,
      scrollY: 5000,
      viewportHeight: 500,
    }),
  ).toEqual({ top: 0.75, height: 0.25 });
});

test("fills the minimap when the article is shorter than the viewport", () => {
  expect(
    calculateViewport({
      articleTop: 100,
      articleHeight: 400,
      scrollY: 300,
      viewportHeight: 800,
    }),
  ).toEqual({ top: 0, height: 1 });
});

test("normalizes and clamps content blocks to the article", () => {
  const block = normalizeBlock({ top: 900, height: 300, kind: "figure" }, 1000);

  expect(block.kind).toBe("figure");
  expect(block.top).toBeCloseTo(0.9);
  expect(block.height).toBeCloseTo(0.1);
});
