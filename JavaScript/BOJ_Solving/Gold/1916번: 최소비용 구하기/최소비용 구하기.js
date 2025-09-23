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
    if (this.size() === 0) {
      return null;
    }

    const min = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown();
    return min;
  }

  swap(a, b) {
    return ([this.items[a], this.items[b]] = [this.items[b], this.items[a]]);
  }

  bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2);
      if (this.items[parentIdx][0] <= this.items[index][0]) {
        break;
      }
      this.swap(index, parentIdx);
      index = parentIdx;
    }
  }

  bubbleDown() {
    let index = 0;
    // 자식을 갖고 있는 동안
    while (index * 2 + 1 < this.size()) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;

      let smallerChild =
        rightChild < this.size() && this.items[rightChild][0] < this.items[leftChild][0]
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

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// n(도시), m(버스) 입력 받기
const n = parseInt(input[0]);
const m = parseInt(input[1]);

// n과 m의 정보를 담는 graph 입력받기
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 2; i < m + 2; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a].push([b, c]);
}

const [start, end] = input[m + 2].split(" ").map(Number);

const INF = Number.MAX_SAFE_INTEGER;
const distance = Array.from({ length: n + 1 }).fill(INF);
distance[start] = 0;

const q = new MinHeap();
q.push([0, start]);

while (q.size() > 0) {
  const [dist, now] = q.pop();
  if (distance[now] < dist) {
    continue;
  }

  for (const i of graph[now]) {
    const cost = dist + i[1];
    if (cost < distance[i[0]]) {
      distance[i[0]] = cost;
      q.push([cost, i[0]]);
    }
  }
}

console.log(distance[end]);

// const graph = Array.from({ length: n + 1 }, () => []);
// for (let i = 2; i < 2 + m; i++) {
//   const [a, b, c] = input[i].split(" ").map(Number);
//   graph[a].push([b, c]);
// }

// const [start, end] = input[2 + m].split(" ").map(Number);

// const INF = Number.MAX_SAFE_INTEGER;
// const dist = Array(n + 1).fill(INF);
// dist[start] = 0;

// const pq = new MinHeap();
// pq.push([0, start]);

// while (pq.size() > 0) {
//   const [cost, node] = pq.pop();
//   if (dist[node] < cost) continue;

//   for (const [adjacentNode, w] of graph[node]) {
//     const nd = cost + w;
//     if (nd < dist[adjacentNode]) {
//       dist[adjacentNode] = nd;
//       pq.push([nd, adjacentNode]);
//     }
//   }
// }

// console.log(dist[end]);
