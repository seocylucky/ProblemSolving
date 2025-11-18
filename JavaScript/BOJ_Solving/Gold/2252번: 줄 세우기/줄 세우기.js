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

  size() {
    return (this.rear = this.front);
  }

  empty() {
    return this.rear === this.front;
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
  const [start, end] = input[i].split(" ").map(Number);

  graph[start].push(end);
  indegree[end] += 1;
}

function topology() {
  const result = [];
  const q = new Queue();

  for (let i = 1; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      q.push(i);
    }
  }

  while (!q.empty()) {
    const cur = q.pop();
    result.push(cur);

    for (const adj of graph[cur]) {
      indegree[adj] -= 1;
      if (indegree[adj] === 0) {
        q.push(adj);
      }
    }
  }

  return result.join(" ");
}

console.log(topology());
