class Queue {
  items = [];
  front = 0;
  isReversed = false;

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isReversed) {
      return this.items.pop();
    } else {
      return this.items[this.front++];
    }
  }

  reverse() {
    this.isReversed = !this.isReversed;
  }

  size() {
    return this.isReversed ? this.items.length - this.front : this.items.length - this.front;
  }

  isEmpty() {
    return this.size() === 0;
  }

  toString() {
    const slice = this.items.slice(this.front);
    const output = this.isReversed ? slice.reverse() : slice;
    return `[${output.join(",")}]`;
  }
}

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input[0]);
let results = [];

let idx = 1;

for (let t = 0; t < T; t++) {
  const p = input[idx++]; // 문자열 명령(수행) 함수
  const n = parseInt(input[idx++]); // 배열에 들어갈 수의 개수
  const nums = input[idx++]; // 숫자 배열

  let q = new Queue();

  const pArr = [...p];
  const arr = nums === "[]" ? [] : nums.slice(1, -1).split(",");

  for (let num of arr) {
    q.push(num);
  }

  let error = false;

  for (const cmd of p) {
    if (cmd === "R") {
      q.reverse();
    } else if (cmd === "D") {
      if (q.isEmpty()) {
        error = true;
        break;
      } else {
        q.pop();
      }
    }
  }

  results.push(error ? "error" : q.toString());
}

console.log(results.join("\n"));
