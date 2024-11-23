const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [N, M] = input[0];
let arr = Array.from({ length: N }).fill(0);

for (let i = 0; i < N; i++) {
  arr[i] = i + 1;
}

for (let i = 0; i < M; i++) {
  const [a, b] = input[i + 1];

  let reverseArr = arr.slice(a - 1, b).reverse();

  arr.splice(a - 1, b - (a - 1), ...reverseArr);
}

console.log(arr.join(" "));
