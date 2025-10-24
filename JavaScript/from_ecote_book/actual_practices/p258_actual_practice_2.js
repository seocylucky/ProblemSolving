// 입력 받기
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const INF = parseInt(1e9);

// n, m
const [n, m] = input[0].split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(INF));

// 자기 자신 -> 자기 자신 비용은 0으로 초기화
for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < n + 1; j++) {
    if (i === j) graph[i][j] = 0;
  }
}

// 연결된 회사 a, b 경로 graph로 정보 입력 받기
for (let i = 1; i < m + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a][b] = 1;
  graph[b][a] = 1;
}

for (let k = 1; k < n + 1; k++) {
  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
    }
  }
}

const [x, k] = input[m + 1].split(" ").map(Number);

const distance = graph[1][k] + graph[k][x];

console.log(distance >= INF ? -1 : distance);
