const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 1; i <= n; i++) {
  let num = parseInt(input[i]);
  while (true) {
    if (isPrime(num)) {
      console.log(num);
      break;
    }
    num++;
  }
}
