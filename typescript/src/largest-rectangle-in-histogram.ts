export function largestRectangleArea(heights: number[]): number {
  let m: number = 0
  let s: number[][] = [] // i, h
  let i: number = 0
  heights.forEach(h => {
    let start: number = i
    while (s.length > 0 && h < s[s.length - 1][1]) {
      let [id, ht] = s.pop()
      m = Math.max(m, (i - id) * ht)
      start = id
    }
    s.push([start, h])
    i++
  })
  for (let i = 0 i < s.length i++) {
    m = Math.max(m, s[i][1] * (heights.length - s[i][0]))
  }
  return m
}
