const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [a1, a0] = input[0].split(" ").map(Number);
const c = parseInt(input[1]);
const n0 = parseInt(input[2]);

if (a1 > c) {
  console.log(0);
} else if (a1 === c) {
  console.log(a0 <= 0 ? 1 : 0);
} else {
  let fn = a1 * n0 + a0;
  console.log(fn <= c * n0 ? 1 : 0);
}
