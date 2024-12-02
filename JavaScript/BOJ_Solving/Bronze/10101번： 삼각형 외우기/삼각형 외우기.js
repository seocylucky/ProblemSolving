const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [a, b, c] = input;

let sum = a + b + c;

if (a === 60 && b === 60 && c === 60) {
  console.log("Equilateral");
  return;
} else if (sum === 180 && (a === b || a === c || b === c)) {
  console.log("Isosceles");
  return;
} else if (sum === 180) {
  console.log("Scalene");
  return;
} else if (sum !== 180) {
  console.log("Error");
  return;
}
