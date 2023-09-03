export function clean(row: string[]): boolean {
  row = row.filter(e => e !== '.')
  return row.length == new Set(row).size
}

export function isValidSudoku(board: string[][]): boolean {
  let a: string[][] = []
  let b: string[][] = []
  let c: string[][] = []
  let rn: number = 0
  let columns: string[][] = Array(9).fill([]).map(e => e = [])
  for (let row of board) {
    for (let i = 0 i < 9 i++)
      columns[i][rn] = row[i]
    if (!clean(row)) {
      return false
    }
    a.push(row.slice(0, 3))
    b.push(row.slice(4, 7))
    c.push(row.slice(7, 10))
    if (a.length == 3 && [a.flat(), b.flat(), c.flat()].every(a => clean(a))) {
      a = b = c = []
    }
    else if (a.length == 3) return false
    rn++
  }
  return true
}
