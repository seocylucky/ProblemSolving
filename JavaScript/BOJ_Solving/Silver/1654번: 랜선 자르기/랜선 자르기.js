const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;

const [K, N] = input[idx++].split(" ").map(Number);

let cables = new Array();

for (let i = 0; i < K; i++) {
  cables.push(parseInt(input[idx++]));
}

cables.sort((a, b) => a - b);

let max = Math.max(...cables);
let min = 1;

while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  let count = cables.reduce((acc, cur) => {
    return parseInt(acc + cur / mid);
  }, 0);

  if (count >= N) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(max);
