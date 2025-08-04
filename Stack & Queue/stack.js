// LIFO ( last in first out )
class Stack {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
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

const stack1 = new Stack();

stack1.push(10);
stack1.push(20);
stack1.push(30);
console.log(stack1.stack, "after 3 push operations");
stack1.pop();
console.log(stack1.stack, "after 1 pop operation");
stack1.push(40);
console.log(stack1.stack, "after 1 push operation");
console.log(stack1.getSize());
console.log(stack1.getTop());
