import { expect, test } from "vite-plus/test";
import { matchLines } from "./line-transitions.js";
import { stepAtMidpoint } from "./walkthrough.js";

test.each([
  [
    ["helper();", "main();"],
    ["main();", "helper();"],
    {
      matches: [
        { from: 1, to: 0 },
        { from: 0, to: 1 },
      ],
      added: [],
      removed: [],
    },
  ],
  [
    ["", "}", "", "}"],
    ["}", "", "}", ""],
    {
      matches: [
        { from: 1, to: 0 },
        { from: 0, to: 1 },
        { from: 3, to: 2 },
        { from: 2, to: 3 },
      ],
      added: [],
      removed: [],
    },
  ],
  [
    ["  return 1;", "old();"],
    ["return 1;", "new();"],
    { matches: [], added: [0, 1], removed: [0, 1] },
  ],
  [["same", "same"], ["same"], { matches: [{ from: 0, to: 0 }], added: [], removed: [1] }],
  [[], ["first"], { matches: [], added: [0], removed: [] }],
  [["last"], [], { matches: [], added: [], removed: [0] }],
])("matches source lines %j to %j", (before, after, expected) => {
  const result = matchLines(before, after);

  expect(result).toEqual(expected);
});

test.each([
  [[100, 700, 1300], 50, 0],
  [[-500, 100, 700], 400, 1],
  [[-1300, -700, -100], 400, 2],
  [[-700, -100, 500], 500, 2],
  [[-100, 500, 1100], 400, 0],
])("selects a step at the midpoint for %j", (tops, midpoint, expected) => {
  const result = stepAtMidpoint(tops, midpoint);

  expect(result).toBe(expected);
});
