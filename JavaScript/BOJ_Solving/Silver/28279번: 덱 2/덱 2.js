const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const n = parseInt(input[0]);

class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  push(item) {
    this.items[this.rear++] = item;
  }

  pop() {
    if (this.isEmpty()) return -1;
    return this.items[--this.rear];
  }

  unshift(item) {
    this.items[--this.front] = item;
  }

  shift() {
    if (this.isEmpty()) return -1;
    return this.items[this.front++];
  }

  isEmpty() {
    return this.rear === this.front;
  }

  size() {
    return this.rear - this.front;
  }

  first() {
    return this.isEmpty() ? -1 : this.items[this.front];
  }

  last() {
    return this.isEmpty() ? -1 : this.items[this.rear - 1];
  }
}

const q = new Queue();
const output = [];

for (let i = 1; i <= n; i++) {
  const [cmd, val] = input[i].split(" ").map(Number);

  switch (cmd) {
    case 1:
      q.unshift(val);
      break;
    case 2:
      q.push(val);
      break;
    case 3:
      output.push(q.shift());
      break;
    case 4:
      output.push(q.pop());
      break;
    case 5:
      output.push(q.size());
      break;
    case 6:
      output.push(q.isEmpty() ? 1 : 0);
      break;
    case 7:
      output.push(q.first());
      break;
    case 8:
      output.push(q.last());
      break;
  }
}

console.log(output.join("\n"));
