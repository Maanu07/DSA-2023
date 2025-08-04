class Node {
  constructor(value, next = null) {
    this.data = value;
    this.next = next;
  }
}

class QueueFromLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // add new node at the end
  push(value) {
    const newNode = new Node(value);
    this.size++;

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  // remove first element
  pop() {
    if (!this.head) return null;
    const result = this.head.data;
    const nextNode = this.head.next;
    this.head.next = null;
    this.head = nextNode;
    this.size--;
    return result;
  }

  getSize() {
    return this.size;
  }

  getPeek() {
    if (!this.head) return null;

    return this.head.data;
  }
}
