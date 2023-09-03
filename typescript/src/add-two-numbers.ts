import { ListNode } from "../helpers/helpers"

export function addTwoNumbers(a: ListNode | null, b: ListNode | null): ListNode | null {
  let result: ListNode | null = new ListNode(0)
  let previousNode: ListNode | null = result
  let currentSum: ListNode | null
  let carry: number = 0
  let sum: number = 0
  while (a || b) {
    sum = (a?.val === undefined ? 0 : a.val) + (b?.val === undefined ? 0 : b.val) + carry
    carry = Math.trunc(sum / 10)
    sum %= 10
    currentSum = new ListNode(sum)
    previousNode.next = currentSum
    previousNode = previousNode.next
    a = a?.next
    b = b?.next
  }
  if (carry > 0) previousNode.next = new ListNode(carry)
  return result.next
}

/*
    1 
    342  
    765
   1107
   1701
 70 ok
 01 ok
 11 
  
    1 
    342  
    465
    807
 */
