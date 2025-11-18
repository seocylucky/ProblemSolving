class MinHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
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

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.items[parentIndex][0] <= this.items[index][0]) {
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
        this.items[rightChild][0] < this.items[leftChild][0]
          ? rightChild
          : leftChild;

      if (this.items[index][0] <= this.items[smallerChild][0]) {
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

const [n, e] = input[0].split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i < e + 1; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

const [v1, v2] = input[e + 1].split(" ").map(Number);

function dijkstra(start) {
  const adj_dist = Array.from({ length: n + 1 }, () => Infinity);
  adj_dist[start] = 0;

  const q = new MinHeap();
  q.push([adj_dist[start], start]);

  while (q.size() > 0) {
    const [curDist, curNode] = q.pop();

    if (adj_dist[curNode] < curDist) {
      continue;
    }

    for (const [next, weight] of graph[curNode]) {
      const newDist = curDist + weight;
      if (newDist < adj_dist[next]) {
        adj_dist[next] = newDist;
        q.push([newDist, next]);
      }
    }
  }

  return adj_dist;
}

const distFrom1 = dijkstra(1);
const distFromV1 = dijkstra(v1);
const distFromV2 = dijkstra(v2);

// 1 -> v1 -> v2 -> N
const case1 = distFrom1[v1] + distFromV1[v2] + distFromV2[n];

// 1 -> v2 -> v1 -> N
const case2 = distFrom1[v2] + distFromV2[v1] + distFromV1[n];

let answer = Math.min(case1, case2);

if (answer >= Infinity) answer = -1;

console.log(answer);
