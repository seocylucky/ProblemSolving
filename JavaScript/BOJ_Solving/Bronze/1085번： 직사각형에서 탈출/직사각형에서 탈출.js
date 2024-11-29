const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [x, y, w, h] = input;

console.log(Math.min(x, w - x, y, h - y));
