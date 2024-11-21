const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [T] = input[0];

for (let i = 1; i < T + 1; i++) {
  let [a, b] = input[i];
  console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
}
