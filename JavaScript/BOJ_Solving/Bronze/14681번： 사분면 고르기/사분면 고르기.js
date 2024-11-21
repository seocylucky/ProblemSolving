"use strict";

const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [x, y] = input;

if (x > 0 && y > 0) {
  console.log(1);
}
if (x < 0 && y > 0) {
  console.log(2);
}
if (x < 0 && y < 0) {
  console.log(3);
}
if (x > 0 && y < 0) {
  console.log(4);
}
