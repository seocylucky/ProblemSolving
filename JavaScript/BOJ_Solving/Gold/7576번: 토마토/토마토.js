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

  isEmpty() {
    return this.rear === this.front;
  }
}

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [m, n] = input[0].split(" ").map(Number);
const idx = 1;
const graph = [];

for (let i = idx; i <= n; i++) {
  graph.push(input[i].split(" ").map(Number));
}

const move = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const visited = Array.from({ length: n }, () => Array(m).fill(0));
let days = 1;
let checks = true;
const q = new Queue();

function bfs() {
  while (!q.isEmpty()) {
    const cur = q.pop();

    for (const [dx, dy] of move) {
      const nx = cur[0] + dx;
      const ny = cur[1] + dy;

      if (0 <= nx && nx < n && 0 <= ny && ny < m) {
        if (!visited[nx][ny] && graph[nx][ny] === 0) {
          visited[nx][ny] = visited[cur[0]][cur[1]] + 1;
          q.push([nx, ny]);
          if (days < visited[nx][ny]) days = visited[nx][ny];
        }
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!visited[i][j] && graph[i][j] === 1) {
      visited[i][j] = 1;
      q.push([i, j]);
    } else if (graph[i][j] === -1) {
      visited[i][j] = -1;
    }
  }
}

bfs();

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (visited[i][j] === 0) {
      // 아예 방문하지 않은 경우 체크
      checks = false;
    }
  }
}

console.log(checks ? days - 1 : -1);
