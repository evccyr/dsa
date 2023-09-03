export function isValid(s: string): boolean {
  let stack: string[] = []
  let map = new Map()
  map.set(')', '(')
  map.set(']', '[')
  map.set('}', '{')
  if (map.has(s[0])) return false
  let ss: string[] = s.split('')

  for (let i: number = 0 i < s.length i++) {
    if (Array.from(map.values()).includes(ss[i])) {
      stack.push(ss[i])
    }
    else { // closing
      if (stack.length == 0) return false
      if (stack[stack.length - 1] == map.get(ss[i])) {
        stack.pop()
      }
      else {
        return false
      }
    }
  }

  return stack.length == 0
}
