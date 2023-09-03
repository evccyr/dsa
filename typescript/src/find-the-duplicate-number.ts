export function findDuplicate(nums: number[]): number {
  let firstPtr: number = 0  // slow ptr
  let secondPtr: number = 0 // initially it's a fast ptr
  do {
    firstPtr = nums[firstPtr]
    secondPtr = nums[nums[secondPtr]]
  } while (firstPtr !== secondPtr)

  secondPtr = 0 // now it's a slow ptr
  while (firstPtr !== secondPtr) {
    firstPtr = nums[firstPtr]
    secondPtr = nums[secondPtr]
  }
  return firstPtr
}
