export const longestCommonPrefix = (s: string[]): string => {
  s = s.sort()
  let i: number = 0
  let first: string = s[0] // first string in array
  let last: string = s[s.length - 1] // second string in array
  // i should not exceed the length of the shorter of the first and last string 
  let shorterString: number = Math.min(first.length, last.length)
  while (first[i] === last[i] && i < shorterString) i++
  return first.slice(0, i)
}
