"use strict";

let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [a, b, c] = input;
console.log(a + b + c);
