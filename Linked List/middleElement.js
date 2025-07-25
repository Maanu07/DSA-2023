class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
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

  getMiddle() {
    //  ( ALSO CALLED AS tortoise hare algorithm because of slow and fast pointer)

    // if no node or only one node
    if (!this.head || !this.head.next) return this.head;

    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next; // for odd nodes fast pointer will have next as null at one point and for even nodes fast pointer will be null
    }

    return slow.data;
  }
}

const linkedList = new SinglyLinkedList();
linkedList.addNodeAsHead(60);
linkedList.addNodeAsHead(50);
linkedList.addNodeAsHead(40);
linkedList.addNodeAsHead(30);
linkedList.addNodeAsHead(20);
linkedList.addNodeAsHead(10);

console.log(linkedList.getMiddle()); // 40
