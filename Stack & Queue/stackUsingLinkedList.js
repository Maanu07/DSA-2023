// To implement a stack with linked list we have 2 choice:
// 1. add new node at first and pop from first
// 2. add new node at last and pop from last (see below implementation)

class Nodes {
  constructor(value, next = null) {
    this.data = value;
    this.next = next;
  }
}

class StackUsingLinkedList {
  constructor() {
    this.head = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }

  pop() {
    if (!this.head) return null;

    let temp = this.head;

    if (!this.head.next) {
      const val = this.head.data;
      this.head = null;
      return val;
    }

    while (temp.next.next != null) {
      temp = temp.next;
    }
    let val = temp.next.data;
    temp.next = null;
    return val;
  }
}
