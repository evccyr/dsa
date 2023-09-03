import { ListNode } from "../helpers/helpers";

export const mergeKLists = (lists: Array<ListNode | null>): ListNode | null => {
  let listsArray: number[] = [];
  for (let list of lists) {
    while (list) {
      listsArray.push(list.val)
      list = list.next
    }
  }
  listsArray.sort((a, b) => a - b)
  let head: ListNode | null = new ListNode
  let node: ListNode | null = head
  for (let val of listsArray) {
    node.next = new ListNode(val)
    node = node.next
  }
  return head.next
};
