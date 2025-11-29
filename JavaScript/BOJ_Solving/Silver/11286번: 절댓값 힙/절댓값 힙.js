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
      if (this.compare(this.items[index], this.items[parentIndex]) >= 0) {
        break;
      }
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.size();
    while (index * 2 + 1 < length) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;
      let smallerChild = leftChild;

      if (
        rightChild < length &&
        this.compare(this.items[rightChild], this.items[leftChild]) < 0
      ) {
        smallerChild = rightChild;
      }

      if (this.compare(this.items[smallerChild], this.items[index]) >= 0) {
        break;
      }

      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }

  compare(a, b) {
    const absA = Math.abs(a);
    const absB = Math.abs(b);
    if (absA === absB) {
      return a - b;
    }
    return absA - absB;
  }
}

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);

const heap = new MinHeap();
let result = [];

for (let i = 1; i <= n; i++) {
  const x = parseInt(input[i]);

  if (x === 0) {
    if (heap.size() === 0) {
      result.push("0");
    } else {
      result.push(String(heap.pop()));
    }
  } else {
    heap.insert(x);
  }
}

console.log(result.join("\n"));
