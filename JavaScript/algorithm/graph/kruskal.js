// 특정 원소가 속한 집합 찾기
function find(parent, x) {
  if (parent[x] !== x) {
    parent[x] = find(parent, parent[x]);
  }
  return parent[x];
}

// 두 원소가 속한 집합 합치기
function union(parent, a, b) {
  const x = find(parent, a);
  const y = find(parent, b);

  if (x < y) {
    parent[y] = x;
  } else parent[x] = y;
}

// 노드의 개수와 간선의 개수(union 연산) 입력 받기
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [v, e] = input[0].split(" ").map(Number);
// 부모 테이블 초기화
const parent = Array(v + 1).fill(0);

// 모든 간선을 담을 리스트와 최종 비용을 담을 변수
const edges = [];
let result = 0;

for (let i = 1; i < v + 1; i++) {
  parent[i] = i;
}

for (let i = 1; i < e + 1; i++) {
  const [a, b, cost] = input[i].split(" ").map(Number);
  edges.push([cost, a, b]);
}

// 간선들을 비용 순으로 정렬
edges.sort((a, b) => a[0] - b[0]);

// 간선을 하나씩 확인하며
for (const edge of edges) {
  const [cost, a, b] = edge;
  if (find(parent, a) !== find(parent, b)) {
    union(parent, a, b);
    result += cost;
  }
}

console.log(result);
