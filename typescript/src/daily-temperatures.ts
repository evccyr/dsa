export function dailyTemperatures(temperatures: number[]): number[] {
  let stack: number[][] = []
  let res: number[] = Array(temperatures.length).fill(0).map(e => 0)
  for (let i: number = 0 i < temperatures.length i++) {
    while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
      res[stack[stack.length - 1][1]] = i - stack[stack.length - 1][1]
      stack.pop()
    }
    stack.push([temperatures[i], i])
  }
  return res
}
