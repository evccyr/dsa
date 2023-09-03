export function threeSum(n: number[]): number[][] {
  let res: number[][] = []
  n.sort((b, a) => b - a)
  for (let i = 0; i < n.length - 2; i++) {
    if (i > 0 && n[i] == n[i - 1]) continue
    let l: number = i + 1
    let r: number = n.length - 1
    while (l < r) {
      let sum: number = n[l] + n[r] + n[i]
      if (sum > 0) r--
      else if (sum < 0) l++
      else {
        res.push([n[i], n[l], n[r]])
        l++
        while (n[l] == n[l - 1] && l < r) l++
      }
    }
  }
  return res
}
