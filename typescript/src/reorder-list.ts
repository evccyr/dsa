import { ListNode } from "./helpers/helpers"

export function reorderList(head: ListNode | null): void {
  let [firstHalf, secondHalf]: (ListNode | null)[] = splitList(head)
  let secondHalfReversed: ListNode | null = reverseList(secondHalf)
  head = mergeLists(firstHalf, secondHalfReversed)
}

function splitList(head: ListNode | null): (ListNode | null)[] {
  if (!head || !head.next) return [head, null]
  let slow: ListNode | null = head
  let fast: ListNode | null = head.next
  while (fast && fast.next) {
    slow = slow.next!
    fast = fast.next.next!
  }
  let firstHalf: ListNode | null = head
  let secondHalf: ListNode | null = slow.next
  slow.next = null
  return [firstHalf, secondHalf]
}

function reverseList(head: ListNode | null): ListNode | null {
  let l: ListNode | null = null
  let r: ListNode | null = head
  while (r) {
    let tmp: ListNode | null = r.next
    r.next = l
    l = r
    r = tmp
  }
  return l
}

function mergeLists(left: ListNode | null, right: ListNode | null): ListNode | null {
  let l: ListNode | null = left
  let r: ListNode | null = right
  while (l && r) {
    let nextLeft: ListNode | null = l.next
    let nextRight: ListNode | null = r.next

    l.next = r
    r.next = nextLeft

    l = nextLeft
    r = nextRight
  }
  return left
}
