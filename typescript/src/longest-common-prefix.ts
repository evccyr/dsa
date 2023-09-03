export const longestCommonPrefix = (s: string[]): string => {
  s = s.sort()
  let [i, len, shortest] = [0, s.length, Math.min(s[0].length, s[s.length - 1].length)]
  while (s[0][i] === s[len - 1][i] && i < shortest) i++
  return s[0].slice(0, i)
}
