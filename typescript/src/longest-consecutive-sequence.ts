export function longestConsecutive(nums: number[]): number {
  let s = nums.reduce((a, v) => { return { ...a, [v]: '' } }, {})
  let longest: number = 0
  for (let n of nums) {
    let l: number = 1
    if (s[n - 1] !== '') {
      while (s[n + 1] === '') {
        l++
        n++
      }
    }
    longest = l > longest ? l : longest
  }
  return longest
}
