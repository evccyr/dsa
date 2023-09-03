export function encode(s: string[]): string {
  let res: string = ''
  for (let w of s) {
    res = res.concat(w.length.toString())
    res = res.concat(w)
  }
  return res
}

export function decode(s: string): string[] {
  let res: string[] = []
  let marker: number = 0
  while (marker < s.length) {
    let end = marker + Number(s[marker]) + 1
    res.push(s.slice(marker + 1, end))
    marker = end
  }
  return res
}
