// 특정 원소가 속한 집합 찾기
function find(parent, x) {
  if (parent[x] !== x) {
    parent[x] = find(parent, parent[x]);
  }
  return parent[x];
}

// 두 원소가 속한 집합을 합치기
function union(parent, a, b) {
  const x = find(parent, a);
  const y = find(parent, b);

  if (x < y) {
    parent[y] = x;
  } else parent[x] = y;
}

// 노드의 개수와 간선(union 연산)의 개수 입력 받기
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [v, e] = input[0].split(" ").map(Number);
// 부모 테이블 초기화
const parent = Array(v + 1).fill(0);

// 부모 테이블 자기 자신으로 초기화
for (let i = 0; i < v + 1; i++) {
  parent[i] = i;
}

// 사이클 발생 여부
let cycle = false;

for (let i = 1; i < e + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  if (find(parent, a) === find(parent, b)) {
    cycle = true;
    break;
  } else union(parent, a, b);
}

if (cycle) console.log("사이클이 발생했습니다.");
else console.log("사이클이 발생하지 않았습니다.");
