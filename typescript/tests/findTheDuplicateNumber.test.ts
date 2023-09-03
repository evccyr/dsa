import { findDuplicate } from "../src/find-the-duplicate-number";
import { test, expect } from "vitest";

test("Find the duplicate number in array using Floyd's cycle detection", () => {
  let nums: number[] = [1, 3, 4, 2, 2]
  expect(findDuplicate(nums)).toStrictEqual(2)
})

