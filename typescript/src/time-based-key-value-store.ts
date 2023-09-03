export class TimeMap {
  map: Map<string, [number, string][]>
  constructor() {
    this.map = new Map()
  }

  set(key: string, value: string, timestamp: number): void {
    this.map.has(key) ?
      this.map.get(key).push([timestamp, value]) :
      this.map.set(key, [[timestamp, value]])
  }

  get(key: string, timestamp: number): string {
    let res: string = ''
    if (this.map.has(key)) {
      let got: [number, string][] = this.map.get(key)
      let l: number = 0
      let r: number = got.length - 1
      while (l <= r) {
        let m = l + Math.ceil((r - l) / 2)
        if (timestamp == got[m][0]) return got[m][1]
        if (timestamp >= got[m][0]) {
          l = m + 1
          res = got[m][1]
        }
        else r = m - 1
      }
    }
    return res
  }
}
