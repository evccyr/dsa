export function search(nums: number[], target: number): number {
  let l: number = 0
  let r: number = nums.length - 1
  while (l <= r) {
    let m: number = l + Math.ceil((r - l) / 2)
    if (nums[m] === target) return m
    nums[m] >= nums[l] ?
      target < nums[l] || target > nums[m] ?
        l = m + 1 :
        r = m - 1 :
      target > nums[r] || target < nums[m] ?
        r = m - 1 :
        l = m + 1
  }
  return -1
}
