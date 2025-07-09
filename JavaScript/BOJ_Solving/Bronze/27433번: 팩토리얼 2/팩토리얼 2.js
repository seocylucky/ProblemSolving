const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = parseInt(input);
let res = 1;

for (let i = n; i > 0; i--) {
  res *= i;
}

console.log(n === 0 ? 1 : res);
