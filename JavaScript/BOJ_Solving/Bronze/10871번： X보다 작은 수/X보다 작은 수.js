const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [N, X] = input[0];
const arr = input[1];
let result = [];

for (let i of arr) {
  if (i < X) {
    result.push(i);
  }
}

console.log(result.join(" "));
