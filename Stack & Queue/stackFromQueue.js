class Queue {
  constructor() {
    this.queue = [];
  }

  push(value) {
    this.queue.push(value);

    // rotate the queue such that last inserted element comes at first
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift());
    }
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.queue.shift();
  }

  getTop() {
    if (this.isEmpty()) return null;
    return this.queue[0];
  }

  getSize() {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}
