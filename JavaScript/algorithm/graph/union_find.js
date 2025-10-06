// 특정 원소가 속한 집합 찾기
function find(parent, x) {
  // 루트 노드가 아니라면, 루트 노드를 찾을 때까지 재귀적으로 호출
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
  } else {
    parent[x] = y;
  }
}

// 노드 위 개수와 간선(union 연산)의 개수 입력 받기
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [v, e] = input[0].split(" ").map(Number);
// 부모 테이블 초기화
const parent = Array(v + 1).fill(0);

// 부모를 자기 자신으로 초기화
for (let i = 1; i < v + 1; i++) {
  parent[i] = i;
}

// union 연산을 각각 수행
for (let i = 1; i < e + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  union(parent, a, b);
}

let exist_parent = "";
// 각 원소가 속한 집합 출력
for (let i = 1; i < v + 1; i++) {
  exist_parent += find(parent, i) + " ";
}

// 부모 테이블 내용 출력
let parent_table = "";
for (let i = 1; i < v + 1; i++) {
  parent_table += parent[i] + " ";
}

console.log(exist_parent);
console.log(parent_table);
