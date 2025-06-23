const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let X = Number(input);

let result = 0;

while (X > 0) {
  if (X % 2 === 1) {
    result++;
  }
  X = Math.floor(X / 2);
}

console.log(result);
