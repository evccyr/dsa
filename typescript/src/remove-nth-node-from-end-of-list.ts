import { ListNode } from "./helpers/helpers"

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head || !head.next) return null
  let dummyNode: ListNode | null = new ListNode(0, head)
  let s: ListNode | null = dummyNode
  let f: ListNode | null = dummyNode
  while (n-- && f) {
    f = f.next
  }
  while (f && f.next) {
    s = s.next!
    f = f.next!
  }
  let tmp: ListNode | null = s?.next?.next!
  s.next = tmp
  return dummyNode.next
}
