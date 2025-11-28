class MinHeap {
  constructor() {
    this.items = [];
  }

  push(item) {
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

  size() {
    return this.items.length;
  }

  swap(a, b) {
    return ([this.items[a], this.items[b]] = [this.items[b], this.items[a]]);
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

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);

const indegree = Array.from({ length: n + 1 }, () => 0);
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i < m + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  indegree[b] += 1;
}

function topology_sort() {
  const result = [];
  const q = new MinHeap();

  for (let i = 1; i < n + 1; i++) {
    if (indegree[i] === 0) {
      q.push(i);
    }
  }

  while (q.size() > 0) {
    const now = q.pop();
    result.push(now);

    for (const n of graph[now]) {
      indegree[n] -= 1;

      if (indegree[n] === 0) {
        q.push(n);
      }
    }
  }

  let results = "";

  for (const i of result) {
    results += i + " ";
  }

  return results;
}

console.log(topology_sort());
