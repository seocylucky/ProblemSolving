const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

// n(공의 개수)과 m(무게가 가질 수 있는 최대 값)
const [n, m] = input[0].split(" ").map(Number);

// 공의 각 무게
const balls = input[1].split(" ").map(Number);

// 조합들을 모아둔 리스트
let combinations = new Set();

// 조합의 개수
let count = 0;

// 두 사람이 가질 수 있는 공의 조합 구하기(단, 같은 무게를 둘 다 들 수 없음)
for (let i = 0; i < balls.length; i++) {
  for (let j = 1; j < balls.length; j++) {
    // 같은 무게일 때는 패스
    if (balls[i] === balls[j]) {
      continue;
    }

    const a = Math.min(i, j);
    const b = Math.max(i, j);
    const key = `${a}-${b}`;

    if (!combinations.has(key)) {
      combinations.add(key);
      count += 1;
    }
  }
}

console.log(count);
