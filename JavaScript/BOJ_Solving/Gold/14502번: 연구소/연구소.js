const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// n*m 크기의 graph
const [n, m] = input[0].split(" ").map(Number);
const graph = [];
// 벽 설치 후 맵
const temp = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => 0)
);

for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(" ").map(Number));
}

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let result = 0;

// 바이러스가 사방으로 퍼지는 함수
function virus(x, y) {
  for (let i = 0; i < 4; i++) {
    nx = x + dx[i];
    ny = y + dy[i];

    // 이동할 수 있는 경우
    if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
      if (temp[nx][ny] === 0) {
        temp[nx][ny] = 2;
        virus(nx, ny);
      }
    }
  }
}

// 안전 영역 구하는 함수
function get_score() {
  let score = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (temp[i][j] === 0) {
        score += 1;
      }
    }
  }
  return score;
}

// 울타리 설치하면서 안전영역 완탐
function dfs(count) {
  // 울타리 3개 설치할 때
  if (count === 3) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        temp[i][j] = graph[i][j];
      }
    }
    // 각 바이러스의 위치에서 전파 진행
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (temp[i][j] === 2) {
          virus(i, j);
        }
      }
    }
    // 안전 영역 최대값 계산
    result = Math.max(result, get_score());
    return;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 0) {
        graph[i][j] = 1;
        count += 1;
        dfs(count);
        graph[i][j] = 0;
        count -= 1;
      }
    }
  }
}

dfs(0);
console.log(result);
