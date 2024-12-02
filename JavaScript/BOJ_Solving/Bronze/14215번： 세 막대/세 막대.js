const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

input.sort((a, b) => b - a);

let [a, b, c] = input;

if (a >= b + c) {
  a = b + c - 1;
}

console.log(a + b + c);
