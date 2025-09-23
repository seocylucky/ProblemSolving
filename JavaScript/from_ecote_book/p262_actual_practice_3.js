class Minheap {
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
      let left = index * 2 + 1;
      let right = index * 2 + 2;

      let smaller_child =
        right < this.size() && this.items[right][0] < this.items[left][0] ? right : left;

      if (this.items[index][0] <= this.items[smaller_child][0]) {
        break;
      }

      this.swap(index, smaller_child);
      index = smaller_child;
    }
  }
}

// n(도시의 개수), m(통로의 개수), c(출발점)
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m, start] = input[0].split(" ").map(Number);
const INF = parseInt(1e9);

// m개의 통로에 대한 정보(x -> y로 가는데 걸리는 비용)입력
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i < m + 1; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a].push([b, c]);
}

const distance = Array.from({ length: n + 1 }).fill(INF);

const q = new Minheap();
q.push([0, start]);
distance[start] = 0;

while (q.size() > 0) {
  const [dist, now] = q.pop();
  if (distance[now] < dist) {
    continue;
  }
  for (const [to, w] of graph[now]) {
    const cost = dist + w;
    if (cost < distance[to]) {
      distance[to] = cost;
      q.push([cost, to]);
    }
  }
}

let count = 0;
let max_distance = 0;

for (const i of distance) {
  if (i !== INF) {
    count += 1;
    max_distance = Math.max(max_distance, i);
  }
}

console.log(count - 1, max_distance);
