export function lengthOfLongestSubstring(s: string): number {
  let i: number = 0
  let m: number = 0
  let sub: string[] = []
  while (i < s.length) {
    while (sub.includes(s[i]) && sub.length) {
      sub.shift()
    }
    sub.push(s[i])
    m = Math.max(m, sub.length)
    i++
  }
  return m
}
