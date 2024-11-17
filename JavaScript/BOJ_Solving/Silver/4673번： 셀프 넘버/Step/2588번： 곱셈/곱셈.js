"use strict";

const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let one = input[0];
let two = input[1];
let three;
let four;
let five;

let twoArr = two.toString();

for (let i = 0; i < twoArr.length; i++) {
  if (i === 2) {
    three = one * twoArr[i];
  }
  if (i === 1) {
    four = one * twoArr[i];
  }
  if (i === 0) {
    five = one * twoArr[i];
  }
}

let result = one * two;

let arr = [three, four, five, result];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
