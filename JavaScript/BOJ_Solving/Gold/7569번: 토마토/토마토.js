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

const move = [
  [-1, 0, 0],
  [1, 0, 0],
  [0, -1, 0],
  [0, 1, 0],
  [0, 0, -1],
  [0, 0, 1],
];

const [m, n, h] = input[0].split(" ").map(Number);
let idx = 1;
const graph = [];
let day = 1;
let check = true;
const q = new Queue();

const visited = Array.from({ length: h }, () => Array.from({ length: n }, () => Array(m).fill(0)));

for (let z = 0; z < h; z++) {
  const layer = [];
  for (let i = 0; i < n; i++) {
    layer.push(input[idx++].split(" ").map(Number));
  }
  graph.push(layer);
}

for (let z = 0; z < h; z++) {
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (graph[z][x][y] === 1) {
        visited[z][x][y] = 1;
        q.push([z, x, y]);
      } else if (graph[z][x][y] === -1) {
        visited[z][x][y] = -1;
      }
    }
  }
}

function bfs() {
  while (!q.isEmpty()) {
    const [z, x, y] = q.pop();

    for (const [dz, dx, dy] of move) {
      const nz = z + dz;
      const nx = x + dx;
      const ny = y + dy;

      if (0 <= nz && nz < h && 0 <= nx && nx < n && 0 <= ny && ny < m) {
        if (!visited[nz][nx][ny] && graph[nz][nx][ny] === 0) {
          visited[nz][nx][ny] = visited[z][x][y] + 1;
          q.push([nz, nx, ny]);
          if (day < visited[nz][nx][ny]) day = visited[nz][nx][ny];
        }
      }
    }
  }
}

bfs();

for (let z = 0; z < h; z++) {
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (visited[z][x][y] === 0) {
        check = false;
      }
    }
  }
}

console.log(check ? day - 1 : -1);
