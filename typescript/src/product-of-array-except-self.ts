export function productExceptSelf(nums: number[]): number[] {
  let res = Array(nums.length).fill(1)
  for (let i = 1 i < nums.length i++) {
    res[i] = res[i - 1] * nums[i - 1]
  }
  let tmp = nums[nums.length - 1]
  for (let i = nums.length - 2 i >= 0 i--) {
    res[i] = tmp * res[i]
    tmp = tmp * nums[i]
  }
  return res.map((v) => v == 0 ? 0 : v)
}
