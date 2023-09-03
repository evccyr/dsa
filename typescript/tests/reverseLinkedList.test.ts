import { ListNode, makeLinkedList } from '../helpers/helpers'
import { expect, test } from 'vitest'
import { reverseListRecursive, reverseList } from "../src/reverse-linked-list"

test('reverse a linked list', () => {
  let list: ListNode | null = new ListNode(6, new ListNode(4, new ListNode(3)))
  let reversedList: ListNode | null = new ListNode(3, new ListNode(4, new ListNode(6)))
  expect(reverseList(list)).toStrictEqual(reversedList)
})

test('reverse a linked list using recursion', () => {
  let list: ListNode | null = makeLinkedList(6, 4, 3)
  let reversedList: ListNode | null = makeLinkedList(3, 4, 6)
  expect(reverseListRecursive(list)).toStrictEqual(reversedList)
})
