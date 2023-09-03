export function evalRPN(tokens: string[]): number {
  let stack: number[] = []
  tokens.forEach(e => {
    switch (e) {
      case '+':
        stack.push(stack.pop() + stack.pop())
        break
      case '-':
        stack.push(-stack.pop() + stack.pop())
        break
      case '*':
        stack.push(stack.pop() * stack.pop())
        break
      case '/':
        {
          let b: number = stack.pop()
          let a: number = stack.pop()
          stack.push(Math.trunc(a / b) == 0 ? 0 : Math.trunc(a / b))
          break
        }
      default:
        stack.push(Number(e))
        break
    }
  })
  return stack.pop()
}
