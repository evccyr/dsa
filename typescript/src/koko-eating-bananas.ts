export const minEatingSpeed = (p: number[], h: number): number => {
  let s: number = 1
  let e: number = Math.max(...p)
  let res: number = e
  while (s <= e) {
    let m: number = Math.floor((e + s) / 2)
    let hours: number = p.reduce((a, e) => a + Math.ceil(e / m), 0)
    if (hours <= h) {
      res = Math.min(res, m)
      e = m - 1
    }
    else s = m + 1
  }
  return res
}
