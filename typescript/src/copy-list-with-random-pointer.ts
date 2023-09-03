import { Node } from "./helpers/helpers"

export function copyRandomList(head: Node | null): Node | null {
  let deepCopy: Node | null = new Node(0)
  let currentNode: Node | null = deepCopy
  while (head) {
    currentNode.next = new Node(head.val, null, copyRandomList(head.random))
    head = head.next!
    currentNode = currentNode.next!
  }
  return deepCopy.next
}
