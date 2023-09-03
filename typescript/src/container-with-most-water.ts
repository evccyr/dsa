export function maxArea(h: number[]): number {
  let l: number = 0
  let m: number = 0
  let r: number = h.length - 1
  while (l < r) {
    m = Math.max(m, (r - l) * Math.min(h[l], h[r]))
    h[l] < h[r] ? l++ : r--
  }
  return m
}
