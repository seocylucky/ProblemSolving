const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const n = input[0];
const trees = [];
const defers = [];
let result = 0;

for (let i = 1; i < n + 1; i++) {
  trees.push(input[i]);
}

for (let i = 0; i < trees.length - 1; i++) {
  defers.push(trees[i + 1] - trees[i]);
}

// 차이값들의 최대공약수 구하기
function gcd(n1, n2) {
  return n2 === 0 ? n1 : gcd(n2, n1 % n2);
}

let maxGcd = defers[0];
for (let i = 1; i < defers.length; i++) {
  maxGcd = gcd(maxGcd, defers[i]);
}

for (const defer of defers) {
  if (defer % maxGcd === 0) {
    result += defer / maxGcd - 1;
  }
}

console.log(result);
