const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

for (let i of input) {
  let [a, b, c] = i;

  if (a === 0 && b === 0 && c === 0) {
    return;
  }

  let sides = [a, b, c].sort((x, y) => x - y);
  let [x, y, z] = sides;

  if (z >= x + y) {
    console.log("Invalid");
  } else if (x === y && y === z) {
    console.log("Equilateral");
  } else if (x === y || y === z || x === z) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
}
