const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const sortedInput = input.sort((a, b) => a - b);

const sum = sortedInput.reduce((acc, cur) => acc + cur, 0);

console.log(sum / sortedInput.length);
console.log(sortedInput[2]);
