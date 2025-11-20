const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const houses = input[1].split(" ").map(Number);

houses.sort((a, b) => a - b);

const mid =
  (houses.length / 2) % 2 === 0
    ? houses.length / 2
    : Math.round(houses.length / 2);

console.log(houses[mid - 1]);
