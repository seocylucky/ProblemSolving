const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const t = parseInt(input[0]);
let idx = 1;

// 나이트가 이동할 수 있는 이동 방향
const dx = [-2, -2, -1, -1, 1, 1, 2, 2];
const dy = [1, -1, 2, -2, 2, -2, 1, -1];

function bfs(start, target, l) {
  let count = 0;

  const q = [];
  q.push(start);

  // 나이트가 이동할 수 있는 맵 매핑
  const graph = Array.from({ length: l }, () => Array(l).fill(0));
  graph[start[0]][start[1]] = 1;

  while (q.length > 0) {
    const size = q.length;

    for (let s = 0; s < size; s++) {
      const cur = q.shift(); // [현재 이동한 나이트의 좌표]

      // 도착해야할 장소의 좌표와 같을 때 => 카운트 올리고 출력!
      if (cur[0] === target[0] && cur[1] === target[1]) {
        console.log(count);
        return;
      }

      for (let i = 0; i < 8; i++) {
        let nx = cur[0] + dx[i];
        let ny = cur[1] + dy[i];

        if (nx >= 0 && nx < l && ny >= 0 && ny < l && graph[nx][ny] === 0) {
          graph[nx][ny] = 1;
          q.push([nx, ny]);
        }
      }
    }
    count += 1;
  }
}

for (let i = 0; i < t; i++) {
  const l = parseInt(input[idx++]);
  const start = input[idx++].split(" ").map(Number);
  const target = input[idx++].split(" ").map(Number);
  bfs(start, target, l);
}
