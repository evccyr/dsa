export function isPalindrome(s: string): boolean {
  let l: number = s.length
  if (l == 0 || l == 1) return true
  s = s.split('').filter(c => c.match(/[a-zA-Z0-9]/i)).map(c => c.toLowerCase()).join('')
  l = s.length
  if (l % 2 != 0) {
    s = s.slice(0, l / 2) + s.slice(l / 2 + 1, l)
    l = s.length
  }
  let i = 0
  let j = l - 1
  while (i < l / 2 && j >= l / 2) {
    if (s[i] != s[j]) return false
    i++
    j--
  }
  return true
}
