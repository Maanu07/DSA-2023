// Linked list is a linear data structure with elements stored in different locations in the memory. Each element points to its next element and the last element points to null.

// In Linked list we call our element as node

// Our node will have two things
// 1. Data
// 2. Reference to next node

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
  }

  addNodeAsTail(data) {
    const newNode = new Node(data);

    // if head points to null, then assign head to the first node
    if (!this.head) {
      this.head = newNode; // O(1) time for adding first node
      return;
    }

    // O(n) time for adding node at the last of the linked list

    let head = this.head;
    while (head.next) {
      head = head.next;
    }
    head.next = newNode;
  }

  deleteNodeFromHead() {
    // O(1) time
    this.head = this.head.next;
  }

  deleteNodeFromTail() {
    // O(N) time
    let head = this.head;
    while (head.next.next) {
      head = head.next;
    }
    head.next = null; // set the second last node's next to null
  }

  length() {
    // O(N) time
    let head = this.head;
    let count = 0;
    while (head) {
      count++;
      head = head.next;
    }
    return count;
  }

  checkIfPresent(data) {
    // O(N) time
    let head = this.head;
    while (head) {
      if (head.data === data) return true;
      head = head.next;
    }
    return false;
  }

  traverse() {
    let head = this.head;
    while (head) {
      console.log(head.data);
      head = head.next;
    }
  }
}

const linkedList1 = new SinglyLinkedList();
linkedList1.addNodeAsTail(10); // 10
linkedList1.addNodeAsTail(20); // 10 -> 20
linkedList1.addNodeAsTail(30); // 10 -> 20 -> 30
linkedList1.addNodeAsTail(40); // 10 -> 20 -> 30 -> 40
linkedList1.addNodeAsHead(50); // 50 -> 10 -> 20 -> 30 -> 40
linkedList1.deleteNodeFromTail(); // 50 -> 10 -> 20 -> 30
linkedList1.traverse();
console.log(`Length of linked list is ${linkedList1.length()}`);
console.log(
  `Checking if 40 exists in the linked list ${linkedList1.checkIfPresent(40)}`
);
console.log(
  `Checking if 30 exists in the linked list ${linkedList1.checkIfPresent(30)}`
);
