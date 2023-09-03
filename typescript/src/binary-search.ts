export function search(nums: number[], target: number): number {
  let s: number = 0
  let e: number = nums.length - 1
  while (s <= e) {
    let m: number = s + Math.floor((e - s) / 2)
    if (target == nums[m]) return m
    target > nums[m] ? s = m + 1 : e = m - 1
  }
  return -1
}

// Search a 2D Matrix
export export function searchMatrix(matrix: number[][], target: number): boolean {
  for (let i: number = 0 i < matrix.length i++) {
    if (target <= matrix[i][matrix[i].length - 1]) {
      return search(matrix[i], target) !== -1
    }
  }
  return false
}
