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

  // BRUTE FORCE APPROACH
  // detectLoop() {
  //   // O(N) time +  O(N) space
  //   let nodesList = []; // we can use map also  ( new Map() )
  //   let curr = this.head;
  //   while (curr != null) {
  //     if (nodesList.includes(curr)) return true;
  //     nodesList.push(curr);
  //     curr = curr.next;
  //   }
  //   return false;
  // }

  // OPTIMIZED APPROACH
  detectLoop() {
    // we will use tortoise hare algo here
    // O(N)

    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if (fast === slow) {
        return true;
      }
    }

    return false;
  }
}

const linkedList = new SinglyLinkedList();

const node5 = linkedList.addNodeAsHead(50);
const node4 = linkedList.addNodeAsHead(40);
const node3 = linkedList.addNodeAsHead(30);
const node2 = linkedList.addNodeAsHead(20);
const node1 = linkedList.addNodeAsHead(10);

console.log(linkedList.detectLoop()); // false

// node5.next = node1; // create loop
node5.next = node3;

console.log(linkedList.detectLoop()); // true
