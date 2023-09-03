export function findMin(nums: number[]): number {
  let min: number = nums[0]
  let l: number = 0
  let r: number = nums.length - 1
  while (nums[l] > nums[r]) {
    let m: number = l + Math.ceil((r - l) / 2)
    min = Math.min(min, nums[m])
    if (nums[m] > nums[l]) l = m + 1
    else r = m - 1
  }
  min = Math.min(min, nums[l])
  return min
}
