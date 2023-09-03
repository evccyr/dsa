import { ListNode } from "./helpers/helpers"

export function mergeTwoLists(l: ListNode | null, r: ListNode | null): ListNode | null {
  let head: ListNode | null = new ListNode()
  let node: ListNode | null = head
  while (l && r) {
    if (l.val > r.val) {
      node.next = new ListNode(r.val)
      r = r.next
    }
    else {
      node.next = new ListNode(l.val)
      l = l.next
    }
    node = node?.next
  }
  if (!l && node) node.next = r
  if (!r && node) node.next = l
  return head.next
}
