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
    return ([this.items[a], this.items[b]] = [this.items[b], this.items[a]]);
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
      let smallerCHild =
        rightChild < this.size() &&
        this.items[rightChild][0] < this.items[leftChild][0]
          ? rightChild
          : leftChild;

      if (this.items[smallerCHild][0] >= this.items[index][0]) {
        break;
      }

      this.swap(index, smallerCHild);
      index = smallerCHild;
    }
  }
}

// n, m, x 입력 받기
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m, x] = input[0].split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);

// 도로 정보 그래프 초기화
for (let idx = 1; idx < m + 1; idx++) {
  const [a, b, i] = input[idx].split(" ").map(Number);
  graph[a].push([b, i]);
}

function dijkstra(start) {
  const dist = Array.from({ length: n + 1 }, () => Infinity);
  dist[start] = 0;

  const q = new MinHeap();
  q.push([dist[start], start]);

  while (q.size() > 0) {
    const [curDist, cur] = q.pop();

    if (dist[cur] < curDist) {
      continue;
    }

    for (const [adj, adjDist] of graph[cur]) {
      const weight = curDist + adjDist;
      if (dist[adj] > weight) {
        dist[adj] = weight;
        q.push([weight, adj]);
      }
    }
  }

  return dist;
}

const students_times = [];

for (let i = 1; i < n + 1; i++) {
  let time = 0;

  // 시작점에서 x까지의 최단경로
  const shortPathfromStart = dijkstra(i);
  const fromStartToX = shortPathfromStart[x];
  // x부터 시작점까지의 최단경로
  const shortPathfromX = dijkstra(x);
  const fromXToStart = shortPathfromX[i];

  time = fromStartToX + fromXToStart;

  students_times.push(time);
}

console.log(Math.max(...students_times));
