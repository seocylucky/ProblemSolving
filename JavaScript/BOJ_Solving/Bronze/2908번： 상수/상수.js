const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((el) => el.split(""));

let [a, b] = input;

a.reverse();
b.reverse();

a = parseInt(a.join(""));
b = parseInt(b.join(""));

console.log(Math.max(a, b));
