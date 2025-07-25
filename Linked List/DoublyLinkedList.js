// Doubly linked list is same as singly but here we can move in backward direction also with the help of prev pointer

class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  addNodeAsHead(data) {
    // O(1) time
    if (!this.head) {
      const newNode = new Node(data, null);
      this.head = newNode;
      return;
    }

    const newNode = new Node(data, this.head); // new node next will be current head
    this.head.prev = newNode; // current head prev will now point to new node
    this.head = newNode; // update head with new node
  }

  addNodeAsTail(data) {
    // O(N) time
    let head = this.head;

    if (!head) {
      const newNode = new Node(data, null, null);
      this.head = newNode;
      return;
    }

    // traverse till last node
    while (head.next) {
      head = head.next;
    }
    const newNode = new Node(data, null, head); // create new node and point its next to null and prev to last node
    head.next = newNode; // update last node next to point to new node
  }

  deleteNodeFromHead() {
    // O(1) time

    // no nodes or only one node
    if (!this.head || !this.head.next) {
      this.head = null;
      return;
    }

    const secondNode = this.head.next;
    secondNode.prev = null; // set second node prev to null
    this.head.next = null; // set current head next to null
    this.head = secondNode; // point head to second node
  }

  deleteNodeFromTail() {
    // O(N) time

    // if there is only one node
    if (!this.head || !this.head.next) {
      this.head = null;
      return;
    }

    let head = this.head;

    while (head.next) {
      head = head.next;
    }
    let secondLastNode = head.prev;
    head.prev = null; // set last node prev to null
    secondLastNode.next = null; // set second last node next to null
  }

  reverse() {
    // Empty or single-node list, no need to reverse
    if (!this.head || !this.head.next) {
      return this.head;
    }

    // O(N) time

    // 2 pointer require
    let current = this.head;
    let temp = null; // for swap we will need a temp variable

    // run loop till last node
    while (current !== null) {
      // swap next and prev
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;

      current = current.prev;
    }

    // after loop, temp will point to the previous node (which becomes the new head)
    if (temp !== null) {
      this.head = temp.prev;
    }

    return this.head;
  }
  traverse() {
    let head = this.head;
    while (head) {
      console.log(head.data);
      head = head.next;
    }
  }
}

const linkedList = new DoublyLinkedList();
linkedList.addNodeAsTail(10); // 10
linkedList.addNodeAsTail(20); // 10 <=> 20
linkedList.addNodeAsTail(30); //  10 <=> 20 <=> 30
linkedList.addNodeAsTail(40); //  10 <=> 20 <=> 30 <=> 40
linkedList.deleteNodeFromTail(); //  10 <=> 20 <=> 30
linkedList.addNodeAsHead(40); // 40 <=> 10 <=> 20 <=> 30
linkedList.addNodeAsHead(50); // 50 <=> 40 <=> 10 <=> 20 <=> 30
linkedList.deleteNodeFromHead(); // 40 <=> 10 <=> 20 <=> 30
linkedList.traverse();
linkedList.reverse();
console.log("--------------");
linkedList.traverse();
