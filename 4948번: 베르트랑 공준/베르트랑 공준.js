const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let idx = 0;

while (input[idx] !== 0) {
  let cnt = 0;
  for (let i = 3; i <= Math.sqrt(input[idx]); i++) {
    if (input[idx] % 2 === 0) {
      continue;
    }
    if (input[idx] % i === 0) {
      cnt++;
    }
  }
  idx++;

  console.log(cnt);
}
