const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let idx = 0;

while (input[idx] !== 0) {
  const n = input[idx];
  let cnt = 0;

  for (let i = n + 1; i <= 2 * n; i++) {
    if (isPrime(i)) {
      cnt++;
    }
  }

  console.log(cnt);
  idx++;
}

function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}
