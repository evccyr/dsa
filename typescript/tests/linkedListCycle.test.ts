import { hasCycle } from '../src/linked-list-cycle'
import { expect, test } from 'vitest'
import { ListNode, makeLinkedList } from "../helpers/helpers"

test('checks if a linked list is cyclic', () => {
  let a: ListNode | null = makeLinkedList(1)
  let b: ListNode | null = makeLinkedList(1)
  a.next = b
  let c: ListNode | null = makeLinkedList(3)
  b.next = c
  let d: ListNode | null = makeLinkedList(4)
  c.next = d
  d.next = b
  let normalLinkedList: ListNode | null = makeLinkedList(2, 4, 3)
  expect.assertions(2)
  expect(hasCycle(a)).toBeTruthy()
  expect(hasCycle(normalLinkedList)).toBeFalsy()
})
