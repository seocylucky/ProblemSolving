const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let idx = 1;
const map = new Map();
const mArr = [];
let cnt = 0;

for (let i = idx; i < n + 1; i++) {
  idx++;
  map.set(input[i], true);
}

for (let i = idx; i < idx + m; i++) {
  mArr.push(input[i]);
}

for (const str of mArr) {
  if (map.get(str)) {
    cnt++;
  }
}

console.log(cnt);
