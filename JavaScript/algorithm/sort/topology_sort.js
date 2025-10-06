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
    return this.rear - this.front;
  }

  empty() {
    return this.front === this.rear;
  }
}

// 노드와 간선 개수 입력
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [v, e] = input[0].split(" ").map(Number);

// 모든 노드에 대한 진입차수는 0으로 초기화
const indegree = Array(v + 1).fill(0);
//각 노드에 연결된 간선 정보를 담기 위한 연결 리스트
graph = Array.from({ length: v + 1 }, () => []);

// 방향 그래프의 모든 간선 정보 입력
for (let i = 1; i < e + 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  indegree[b] += 1;
}

// 위상 정렬 함수
function topology_sort() {
  const result = [];
  const q = new Queue();

  for (let i = 1; i < v + 1; i++) {
    if (indegree[i] === 0) {
      q.push(i);
    }
  }

  while (!q.empty()) {
    const now = q.pop();
    result.push(now);

    for (const i of graph[now]) {
      indegree[i] -= 1;

      if (indegree[i] === 0) {
        q.push(i);
      }
    }
  }

  let results = "";

  for (const i of result) {
    results += i + " ";
  }

  console.log(results);
}

topology_sort();
