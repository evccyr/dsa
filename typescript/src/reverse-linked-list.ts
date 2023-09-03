import { ListNode } from "./helpers/helpers"

export function reverseListRecursive(head: ListNode | null): ListNode | null {
  if (!head) return null
  let newHead: ListNode | null = head
  if (head?.next) {
    newHead = reverseListRecursive(head.next)
    head.next.next = head
    head.next = null
  }
  return newHead
}

export function reverseList(head: ListNode | null): ListNode | null {
  let l: ListNode | null = null
  let r: ListNode | null = head
  while (r) {
    let nxt: ListNode | null = r.next
    r.next = l
    l = r
    r = nxt
  }
  return l
}
