const fs = require("fs");
const lines = fs.readFileSync(0, "utf8").trim().split("\n");

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
    const last = this.items.pop();
    if (this.size() > 0) {
      this.items[0] = last;
      this.bubbleDown();
    }
    return min;
  }

  peek() {
    return this.size() === 0 ? null : this.items[0];
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.items[parentIndex] <= this.items[index]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    const size = this.size();
    while (index * 2 + 1 < size) {
      const leftChild = index * 2 + 1;
      const rightChild = index * 2 + 2;
      let smallerChild = leftChild;

      if (rightChild < size && this.items[rightChild] < this.items[leftChild]) {
        smallerChild = rightChild;
      }

      if (this.items[index] <= this.items[smallerChild]) break;

      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }
}

let lineIdx = 0;
const T = parseInt(lines[lineIdx++], 10);
const out = [];

for (let tc = 0; tc < T; tc++) {
  const M = parseInt(lines[lineIdx++], 10);

  const nums = [];
  while (nums.length < M && lineIdx < lines.length) {
    const parts = lines[lineIdx++].trim().split(" ").filter(Boolean);
    for (const p of parts) {
      nums.push(parseInt(p, 10));
      if (nums.length === M) break;
    }
  }

  const lower = new MinHeap();
  const upper = new MinHeap();
  const meds = [];

  for (let i = 0; i < M; i++) {
    const x = nums[i];

    const lowerTop = lower.peek();
    if (lower.size() === 0 || x <= -lowerTop) {
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
      meds.push(-lower.peek());
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
