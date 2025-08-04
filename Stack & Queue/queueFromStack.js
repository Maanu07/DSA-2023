class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);

    // rotate
    for (let i = 0; i < this.stack.length - 1; i++) {
      this.stack.push(this.stack.shift());
    }
  }

  pop() {
    return this.stack.pop();
  }

  getTop() {
    return this.stack[this.stack.length - 1];
  }

  getSize() {
    return this.stack.length;
  }
}

const s1 = new Stack();

s1.push(10);
s1.push(20);
s1.push(30);

console.log(s1.getTop());
console.log(s1.pop());

s1.push(40);
console.log(s1.pop());
