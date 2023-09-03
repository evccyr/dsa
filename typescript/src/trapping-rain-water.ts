export function trap(h: number[]): number {
  let lightArea: number = 0
  let maxElement: number = Math.max(...h)
  let boulder: number = 0
  let hSum: number = 0
  h.forEach(e => {
    hSum += e
    if (e > boulder) boulder = e
    lightArea += (maxElement - boulder)
  })
  boulder = 0
  h.reverse().forEach(e => {
    if (e > boulder) boulder = e
    lightArea += (maxElement - boulder)
  })
  return h.length * maxElement - lightArea - hSum
}
