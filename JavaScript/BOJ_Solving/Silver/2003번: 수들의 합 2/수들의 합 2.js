const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let end = 0;
let sum = 0;
let cnt = 0;

for (let i = 0; i < n; i++) {
  while (sum < m && end < n) {
    sum += arr[end];
    end++;
  }
  if (sum === m) {
    cnt += 1;
  }
  sum -= arr[i];
}

console.log(cnt);
