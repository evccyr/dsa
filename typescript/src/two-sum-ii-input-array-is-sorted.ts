export function twoSum(n: number[], t: number): number[] {
  let i = 0
  let j = n.length - 1
  while (i < j) {
    let sum = n[i] + n[j]
    if (sum == t) return [i + 1, j + 1]
    (sum > t) ? j-- : i++
  }
  return []
}
