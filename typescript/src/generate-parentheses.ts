export function generateParenthesis(n: number): string[] {
  let res: string[] = []
  backtrack(0, 0, '')

  function backtrack(o: number, c: number, s: string) {
    if (s.length === n * 2) res.push(s)
    if (o > c) backtrack(o, c + 1, s.concat(')'))
    if (o < n) backtrack(o + 1, c, s.concat('('))
  }

  return res
}
