export function carFleet(target: number, position: number[], speed: number[]): number {
  let count: number = 0
  let previous: number = -1
  let ps: number[][] = []
  for (let i: number = 0 i < speed.length i++) {
    ps.push([position[i], speed[i]])
  }
  ps.sort((a, b) => b[0] - a[0]).map(e => {
    let current: number = (target - e[0]) / e[1]
    if (current > previous) {
      count++
      previous = current
    }
  })
  return count
}
