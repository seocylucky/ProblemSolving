const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input[0];

input.shift();

input.sort((a, b) => a - b);

console.log(input.join("\n"));
