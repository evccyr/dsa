export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export class Node {
  val: number
  next: Node | null
  random: Node | null
  constructor(val?: number, next?: Node, random?: Node) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
    this.random = (random === undefined ? null : random)
  }
}

export const printLinkedList = (head: ListNode | null): void => {
  while (head) {
    process.stdout.write(`${head.val}->`)
    head = head.next
  }
}

export const makeLinkedList = (...nums: number[]): ListNode | null => {
  let result: ListNode | null = new ListNode(0)
  let node: ListNode | null = result
  for (const num of nums) {
    node.next = new ListNode(num)
    node = node.next
  }
  return result.next
}

export const linkedListToArray = (head: ListNode | null): number[] => {
  let result: number[] = []
  while (head) {
    result.push(head.val)
    head = head.next
  }
  return result
}

if (import.meta.vitest) {
  const { expect } = import.meta.vitest
  let nums: number[] = [1, 2, 3, 4, 5]
  let list: ListNode | null = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
  expect(makeLinkedList(...nums)).toEqual(list)
  expect(linkedListToArray(list)).toEqual(nums)
  nums = linkedListToArray(list)
  list = makeLinkedList(...nums)
  expect(list).toEqual(nums)
}
