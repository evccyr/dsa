export class MinStack {
  stack: number[]
  min: number[]

  constructor() {
    this.stack = []
    this.min = [Number.MAX_VALUE]
  }

  push(val: number): void {
    this.stack.push(val)
    if (this.min[this.min.length - 1] >= val) {
      this.min.push(val)
    }
  }

  pop(): void {
    if (this.stack.length > 0) {
      if (this.top() == this.min[this.min.length - 1]) this.min.pop()
      this.stack.pop()
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.min[this.min.length - 1]
  }
}
