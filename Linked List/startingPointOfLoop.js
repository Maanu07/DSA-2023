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

  // Brute force
  // getStartingPointOfLoop() {
  //   // O(N) + Map insertion and search time + O(N) space
  //   let curr = this.head;
  //   let map = new Map();

  //   while (curr) {
  //     if (map.has(curr)) return curr.data;

  //     map.set(curr, true);
  //     curr = curr.next;
  //   }

  //   return false; // no loop exists
  // }

  // Optimized
  getStartingPointOfLoop() {
    // O(N) time + O(1) space (no extra space except slow and fast pointers)
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) break;
    }

    // after while loop is fast === slow then we have a loop
    if (fast === slow) {
      slow = this.head;

      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }

      return slow.data;
    } else return false;
  }
}

const linkedList = new SinglyLinkedList();

const node5 = linkedList.addNodeAsHead(50);
const node4 = linkedList.addNodeAsHead(40);
const node3 = linkedList.addNodeAsHead(30);
const node2 = linkedList.addNodeAsHead(20);
const node1 = linkedList.addNodeAsHead(10);

// node5.next = node3;

console.log(linkedList.getStartingPointOfLoop());
