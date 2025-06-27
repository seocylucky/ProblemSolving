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
    return this.front === this.rear;
  }
}

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, l, r] = input[0].split(" ").map(Number);
const maps = [];
const idx = 1;

// 국경 맵 배열 생성
for (let i = idx; i < n + 1; i++) {
  maps.push(input[i].split(" ").map(Number));
}

// 이동할 수 있는 방식
const move = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let unionPeoples = 0;
let day = 0;
let isOpen = false;

// bfs 탐색
function bfs(start, visited) {
  const q = new Queue();
  const union = [start];
  q.push(start);
  visited[start[0]][start[1]] = 1;
  let totalPeople = maps[start[0]][start[1]];

  while (!q.isEmpty()) {
    const [x, y] = q.pop();

    for (const [dx, dy] of move) {
      const nx = x + dx;
      const ny = y + dy;

      // 이동한 곳이 유효한 범위안에 있는지 체크
      if (0 <= nx && nx < n && 0 <= ny && ny < n) {
        // 국경 간 인구 수 차이(절댓값)
        const diff = Math.abs(maps[x][y] - maps[nx][ny]);
        // 이동한 곳과의 인구 수 차이가 l 이상이고 r 이하일 때, 해당 국경 오픈
        if (!visited[nx][ny] && diff >= l && diff <= r) {
          visited[nx][ny] = 1;
          totalPeople += maps[nx][ny];
          q.push([nx, ny]);
          union.push([nx, ny]);
        }
      }
    }
  }

  // 연합 국가가 있을 경우에 연합 국가 총 인구수에 국가 수 나눈 값으로 인원수 교체
  if (union.length > 1) {
    const avg = Math.floor(totalPeople / union.length);

    for (const [x, y] of union) {
      maps[x][y] = avg;
    }

    return true;
  }

  return false;
}

// 인구 이동이 발생하지 않을 때까지 반복
while (true) {
  isOpen = false;
  const visited = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        if (bfs([i, j], visited)) isOpen = true;
      }
    }
  }
  // 해당 턴에 국경이 안열렸다면 스톱
  if (!isOpen) break;

  // 국경이 열렸다면 하루 추가
  day++;
}

console.log(day);
