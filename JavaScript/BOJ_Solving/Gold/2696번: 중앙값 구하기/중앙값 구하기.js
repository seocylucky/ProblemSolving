const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

class MinHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  insert(item) {
    this.items.push(item);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) return null;
    const min = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown();
    return min;
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.items[parentIndex] <= this.items[index]) {
        break;
      }
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.size()) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;
      let smallerChild =
        rightChild < this.size() &&
        this.items[rightChild] < this.items[leftChild]
          ? rightChild
          : leftChild;

      if (this.items[index] <= this.items[smallerChild]) {
        break;
      }

      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }
}

let idx = 0;
const T = parseInt(input[idx++], 10);
let out = [];

for (let tc = 0; tc < T; tc++) {
  const M = parseInt(input[idx++], 10);

  const lower = new MinHeap();
  const upper = new MinHeap();

  const meds = [];

  for (let i = 0; i < M; i++) {
    const x = parseInt(input[idx++], 10);

    if (lower.size() === 0 || x <= -lower.items[0]) {
      lower.insert(-x);
    } else {
      upper.insert(x);
    }

    if (lower.size() < upper.size()) {
      const moved = upper.pop();
      lower.insert(-moved);
    } else if (lower.size() > upper.size() + 1) {
      const moved = -lower.pop();
      upper.insert(moved);
    }

    if (i % 2 === 0) {
      meds.push(-lower.items[0]);
    }
  }

  out.push(String(meds.length));

  let line = [];
  for (let i = 0; i < meds.length; i++) {
    line.push(meds[i]);
    if ((i + 1) % 10 === 0 || i === meds.length - 1) {
      out.push(line.join(" "));
      line = [];
    }
  }
}

console.log(out.join("\n"));
