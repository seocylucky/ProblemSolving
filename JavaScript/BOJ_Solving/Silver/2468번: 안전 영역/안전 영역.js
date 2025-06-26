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

const n = parseInt(input[0]);
const graph = [];
const idx = 1;
let maxH = 0;

// 높이 정보를 graph에 대입
for (let i = idx; i < n + 1; i++) {
  graph.push(input[i].split(" ").map(Number));
  // 최대로 들어갈 수 있는 높이 갱신
  maxH = Math.max(maxH, ...input[i].split(" ").map(Number));
}

// 이동 방식
const move = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

// 안전 여부 담는 배열
const safe = Array.from({ length: n }, () => Array(n).fill(0));
// 높이별 영역 개수 배열
const areas = Array.from({ length: maxH }).fill(0);

// bfs
function bfs(start, h, visited) {
  const q = new Queue();
  q.push(start);
  visited[start[0]][start[1]] = 1;

  while (!q.isEmpty()) {
    const [x, y] = q.pop();

    for (const [dx, dy] of move) {
      nx = x + dx;
      ny = y + dy;

      if (0 <= nx && nx < n && 0 <= ny && ny < n) {
        if (!visited[nx][ny] && graph[nx][ny] > h) {
          visited[nx][ny] = 1;
          q.push([nx, ny]);
        }
      }
    }
  }
}

let result = 0;

// 나올 수 있는 높이를 돌면서 최대 영역 갱신
for (let h = 0; h <= maxH; h++) {
  // 방문 여부 담는 배열
  const visited = Array.from({ length: n }, () => Array(n).fill(0));
  let count = 0;

  // 영역을 돌면서 해당 비의 양일 때의 안전 영역 개수 갱신
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j] && graph[i][j] > h) {
        bfs([i, j], h, visited);
        count++;
      }
    }
  }
  // 모든 경우에서 최대 안전 영역 개수 갱신
  result = Math.max(result, count);
}

console.log(result);
