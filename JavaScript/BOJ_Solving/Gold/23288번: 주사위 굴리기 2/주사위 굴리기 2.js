class Dice {
  constructor() {
    this.faces = [1, 6, 5, 2, 4, 3];
    this.x = 0;
    this.y = 0;
    this.dir = 0;
  }

  rotate(dir) {
    let [top, bottom, front, back, left, right] = this.faces;
    if (dir === 0) {
      // 동쪽으로 굴리기
      this.faces = [left, right, front, back, bottom, top];
    } else if (dir === 1) {
      // 남쪽으로 굴리기
      this.faces = [back, front, top, bottom, left, right];
    } else if (dir === 2) {
      // 서쪽으로 굴리기
      this.faces = [right, left, front, back, top, bottom];
    } else if (dir === 3) {
      // 북쪽으로 굴리기
      this.faces = [front, back, bottom, top, left, right];
    }
  }

  move(n, m) {
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    let nx = this.x + dx[this.dir];
    let ny = this.y + dy[this.dir];

    if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
      this.dir = (this.dir + 2) % 4;
      nx = this.x + dx[this.dir];
      ny = this.y + dy[this.dir];
    }

    this.x = nx;
    this.y = ny;
    this.rotate(this.dir);
  }

  getBottom() {
    return this.faces[1];
  }
}

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const graph = input.slice(1).map((line) => line.split(" ").map(Number));

function getScore(x, y, cur) {
  const visited = Array.from({ length: n }, () => Array(m).fill(0));
  const queue = [[x, y]];
  visited[x][y] = 1;
  let cnt = 1;

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  while (queue.length) {
    const [cx, cy] = queue.pop();

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (0 <= nx && nx < n && 0 <= ny && ny < m && !visited[nx][ny] && graph[nx][ny] === cur) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
        cnt++;
      }
    }
  }
  return cur * cnt;
}

const dice = new Dice();
let totalScore = 0;

for (let i = 0; i < k; i++) {
  dice.move(n, m);
  const cur = graph[dice.x][dice.y];
  totalScore += getScore(dice.x, dice.y, cur);

  if (dice.getBottom() > cur) {
    dice.dir = (dice.dir + 1) % 4;
  } else if (dice.getBottom() < cur) {
    dice.dir = (dice.dir + 3) % 4;
  }
}

console.log(totalScore);
