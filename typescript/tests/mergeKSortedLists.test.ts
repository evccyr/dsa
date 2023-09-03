import { ListNode, makeLinkedList } from '../helpers/helpers';
import { mergeKLists } from '../src/merge-k-sorted-lists'
import { expect, test } from 'vitest';

test('mergest k sorted linked lists into a single sorted linked list', () => {
  let a: ListNode | null = makeLinkedList(1, 3, 9)
  let b: ListNode | null = makeLinkedList(2, 4, 6)
  let c: ListNode | null = makeLinkedList(1, 5, 7)
  expect(mergeKLists([a, b, c])).toStrictEqual(makeLinkedList(1, 1, 2, 3, 4, 5, 6, 7, 9))
})
