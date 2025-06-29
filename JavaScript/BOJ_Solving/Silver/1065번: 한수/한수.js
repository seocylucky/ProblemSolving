const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = parseInt(input);
let cnt = 0;

for (let i = 1; i < n + 1; i++) {
  const num = String(i);
  if (i < 100) {
    cnt++;
  } else if (num[0] - num[1] == num[1] - num[2]) {
    cnt++;
  }
}

console.log(cnt);
