import { ListNode, makeLinkedList } from "../helpers/helpers"
import { expect, test } from 'vitest'
import { reorderList } from "../src/reorder-list"

test('reorder a linked list', () => {
  let list: ListNode | null = makeLinkedList(1, 2, 3, 4, 5)
  reorderList(list) // function modifies linked list in place
  let reordered: ListNode | null = makeLinkedList(1, 5, 2, 4, 3)
  expect(list).toStrictEqual(reordered)
})
