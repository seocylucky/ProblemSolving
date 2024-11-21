const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

for (let i = 0; i < input.length; i++) {
  let [a, b] = input[i];
  console.log(a + b);
}
