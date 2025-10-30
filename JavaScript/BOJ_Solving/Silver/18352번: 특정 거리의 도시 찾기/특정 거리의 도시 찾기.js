// 단방향
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// 도시의 개수 n, 도로의 개수 m, 거리 정보 k, 출발 도시의 번호 x 입력
const [n, m, k, x] = input[0].split(" ").map(Number);

// 도로 정보 입력 받기
const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i < 1 + m; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  graph[start].push(end);
}

// 각 도시의 방문 여부
const visited = Array.from({ length: n + 1 }).fill(false);
// 최단거리 배열
const distance = Array.from({ length: n + 1 }).fill(-1);
distance[x] = 0;
// 최단 거리 도시 배열
const shortestCity = [];

function bfs(graph, start, visited) {
  const q = [start];
  visited[start] = true;

  while (q.length > 0) {
    const node = q.shift();
    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        q.push(neighbor);
        visited[neighbor] = true;
        distance[neighbor] = distance[node] + 1;
      }
    }
  }
}

bfs(graph, x, visited);

for (let i = 1; i <= n; i++) {
  if (distance[i] === k) shortestCity.push(i);
}

if (shortestCity.length > 0) {
  shortestCity.sort((a, b) => a - b);
  console.log(shortestCity.join("\n"));
} else {
  console.log(-1);
}
