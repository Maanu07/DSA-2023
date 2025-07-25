class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }
  addNodeAsHead(data) {
    // O(1) time for adding node at the start of the linked list
    const newNode = new Node(data);

    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
    }

    return newNode;
  }

  lengthOfLoop() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) break;
    }

    // loop exists
    if (slow === fast) {
      let count = 1;
      let fast = fast.next;

      while (fast !== slow) {
        count++;
        fast = fast.next;
      }

      return count;
    } else return 0;
  }
}

const linkedList = new SinglyLinkedList();

const node5 = linkedList.addNodeAsHead(50);
const node4 = linkedList.addNodeAsHead(40);
const node3 = linkedList.addNodeAsHead(30);
const node2 = linkedList.addNodeAsHead(20);
const node1 = linkedList.addNodeAsHead(10);

node5.next = node1;

console.log(linkedList.lengthOfLoop());
