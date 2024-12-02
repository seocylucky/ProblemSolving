const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let [x1, y1] = input[0];
let [x2, y2] = input[1];
let [x3, y3] = input[2];
let x4 = 0;
let y4 = 0;

if (x1 === x2) {
  x4 = x3;
} else if (x2 === x3) {
  x4 = x1;
} else if (x1 === x3) {
  x4 = x2;
}

if (y1 === y2) {
  y4 = y3;
} else if (y2 === y3) {
  y4 = y1;
} else if (y1 === y3) {
  y4 = y2;
}

console.log(x4, y4);
