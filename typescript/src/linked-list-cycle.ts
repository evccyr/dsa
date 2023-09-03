import { ListNode } from "./helpers/helpers"

export function hasCycle(head: ListNode | null): boolean {
  let rabbit: ListNode | null = head
  let hare: ListNode | null = head
  while (rabbit && hare) {
    rabbit = rabbit?.next
    hare = hare?.next?.next
    if (Object.is(rabbit, hare)) return true
  }
  return false
}
