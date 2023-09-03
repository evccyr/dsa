export function checkInclusion(s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false
  let m1: number[] = new Array(26).fill(0)
  let m2: number[] = new Array(26).fill(0)
  for (let i = 0 i < s1.length i++) {
    m1[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++
    m2[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++
  }
  let matches: number = 0
  for (let i = 0 i < 26 i++) {
    if (m1[i] === m2[i]) matches++
  }
  for (let i = s1.length i < s2.length i++) {
    if (matches === 26) return true
    let removed: number = s2.charCodeAt(i - s1.length) - 'a'.charCodeAt(0)
    let added: number = s2.charCodeAt(i) - 'a'.charCodeAt(0)
    m2[removed]--
    if (m2[removed] === m1[removed] - 1) matches--
    else if (m2[removed] === m1[removed]) matches++
    m2[added]++
    if (m2[added] === m1[added] + 1) matches--
    else if (m2[added] === m1[added]) matches++
  }
  return matches === 26
}
