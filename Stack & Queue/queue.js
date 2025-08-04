// FIFO ( first in first out )
class Queue {
  constructor() {
    this.queue = [];
  }

  push(value) {
    this.queue.push(value);
  }

  pop() {
    return this.queue.shift(); // shift method removes first element from the array
  }

  getTop() {
    return this.queue[0];
  }

  getSize() {
    return this.queue.length;
  }
}

const queue1 = new Queue();

queue1.push(10);
queue1.push(20);
queue1.push(30);
console.log(queue1.queue, "after 3 push operations");
queue1.pop();
console.log(queue1.queue, "after 1 pop operation");
queue1.push(40);
console.log(queue1.queue, "after 1 push operation");
console.log(queue1.getSize());
console.log(queue1.getTop());
