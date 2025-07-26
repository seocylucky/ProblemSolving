const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let n = parseInt(input);
let isSK = false;

// 짝수 or 홀수 고르기?
while (n > 0) {
  if (n % 1 === 0) {
    isSK = !isSK;
    n -= 1;
  } else if (n % 3 === 0) {
    isSK = !isSK;
    n -= 3;
  }
}

console.log(isSK ? "SK" : "CY");
