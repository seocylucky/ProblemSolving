const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const [N, B] = input;

console.log(parseInt(N).toString(B, 16).toUpperCase());
