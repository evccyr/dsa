import { copyRandomList } from "../src/copy-list-with-random-pointer"
import { expect, test } from 'vitest'
import { Node } from "../helpers/helpers"

test('creates a deepcopy of a linked list', () => {
  let firstNode: Node | null = new Node(1)
  let secondNode: Node | null = new Node(2)
  firstNode.next = secondNode
  firstNode.random = secondNode
  secondNode.random = secondNode
  let newFirstNode: Node | null = new Node(1)
  let newSecondNode: Node | null = new Node(2)
  newFirstNode.next = newSecondNode
  newFirstNode.random = newSecondNode
  newSecondNode.random = newSecondNode
  let deepCopy = copyRandomList(firstNode)
  expect(firstNode).toStrictEqual(newFirstNode)
  expect(newFirstNode).toStrictEqual(deepCopy)
  firstNode.next = new Node(-1, null)
  expect(firstNode.next).not.to.equal(deepCopy.next)
})
