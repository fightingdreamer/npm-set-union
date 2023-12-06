import { test, expect, describe } from "vitest";
import { union, unionMany } from "./union";

describe("union", () => {
  test.each([
    { a: new Set([]), b: [], expected: new Set([]) },
    { a: new Set([1, 2, 3]), b: [3, 4, 5], expected: new Set([1, 2, 3, 4, 5]) },
    { a: new Set([1, 2, 3]), b: [], expected: new Set([1, 2, 3]) },
    { a: new Set([]), b: [3, 4, 5], expected: new Set([3, 4, 5]) },
  ])("union($a, $b) -> $expected", ({ a, b, expected }) => {
    const ib = b[Symbol.iterator]();
    expect(union(a, ib)).toEqual(expected);
  });
});

describe("unionMany", () => {
  test.each([
    { sets: [], expected: new Set() },
    { sets: [[], [], []], expected: new Set() },
    {
      sets: [
        [1, 2, 3],
        [3, 4, 5],
        [5, 6, 7],
      ],
      expected: new Set([1, 2, 3, 4, 5, 6, 7]),
    },
  ])("unionMany($sets) -> $expected", ({ sets, expected }) => {
    expect(unionMany(sets)).toEqual(expected);
  });
});
