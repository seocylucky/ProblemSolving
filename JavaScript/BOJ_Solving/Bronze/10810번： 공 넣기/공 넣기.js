const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [N, M] = input[0];
let arr = Array.from({ length: N }).fill(0);

for (let x = 0; x < M; x++) {
  const [i, j, k] = input[x + 1];

  for (let idx = i; idx < j + 1; idx++) {
    arr[idx - 1] = k;
  }
}

console.log(arr.join(" "));
