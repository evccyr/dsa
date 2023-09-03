import { longestCommonPrefix } from "../src/longest-common-prefix"
import { expect, test } from "vitest"

test('finds the longest common prefix in a collection of strings', () => {
  let strs1: string[] = ["flower", "flow", "flight"]
  let strs2: string[] = ["dog", "racecar", "car"]
  expect(longestCommonPrefix(strs1)).toEqual("fl")
  expect(longestCommonPrefix(strs2)).toEqual("")
})
