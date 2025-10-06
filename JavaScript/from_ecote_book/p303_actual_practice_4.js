class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  empty() {
    return this.front === this.rear;
  }
}

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const n = parseInt(input[0]);
const indegree = Array(n + 1).fill(0);
const graph = Array.from({ length: n + 1 }, () => []);

const time = Array(n + 1).fill(0);

for (let i = 1; i < n + 1; i++) {
  const data = input[i].split(" ").map(Number);
  time[i] = data[0];
  for (let j = 1; j < data.length - 1; j++) {
    const pre = data[j];
    indegree[i] += 1;
    graph[pre].push(i);
  }
}

function topology_sort() {
  const result = Array(n + 1).fill(0);
  const q = new Queue();

  for (let i = 1; i < n + 1; i++) {
    if (indegree[i] === 0) {
      q.push(i);
      result[i] = time[i];
    }
  }

  while (!q.empty()) {
    const now = q.pop();

    for (const i of graph[now]) {
      if (result[i] < result[now] + time[i]) {
        result[i] = result[now] + time[i];
      }

      indegree[i] -= 1;

      if (indegree[i] === 0) {
        q.push(i);
      }
    }
  }

  for (let i = 1; i < n + 1; i++) {
    console.log(result[i]);
  }
}

topology_sort();
