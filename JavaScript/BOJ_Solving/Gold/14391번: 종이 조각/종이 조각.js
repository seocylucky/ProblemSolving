const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split("").map(Number));
}

let answer = 0;

const total = 1 << (n * m);

for (let bit = 0; bit < total; bit++) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    let cur = 0;
    for (let j = 0; j < m; j++) {
      const pos = i * m + j;
      if ((bit & (1 << pos)) === 0) {
        cur = cur * 10 + arr[i][j];
      } else {
        sum += cur;
        cur = 0;
      }
    }
    sum += cur;
  }

  for (let j = 0; j < m; j++) {
    let cur = 0;
    for (let i = 0; i < n; i++) {
      const pos = i * m + j;
      if ((bit & (1 << pos)) !== 0) {
        cur = cur * 10 + arr[i][j];
      } else {
        sum += cur;
        cur = 0;
      }
    }
    sum += cur;
  }

  answer = Math.max(answer, sum);
}

console.log(answer);
