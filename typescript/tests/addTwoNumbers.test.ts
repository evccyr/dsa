import { ListNode, makeLinkedList } from '../helpers/helpers'
import { expect, test } from 'vitest'
import { addTwoNumbers } from "../src/add-two-numbers"

test('add two reverse linked lists like numbers', () => {
  let a: ListNode | null = makeLinkedList(2, 4, 3)
  let b: ListNode | null = makeLinkedList(5, 6, 4)
  let sum: ListNode | null = makeLinkedList(7, 0, 8)
  expect(addTwoNumbers(a, b)).toStrictEqual(sum)
})

/*
    1 
    342  
    765
   1107
   0071
  
    1 
    342  
    465
    807
 */
