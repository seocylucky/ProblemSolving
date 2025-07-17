const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

input.shift();

const MAX = Math.max(...input);

const isPrime = Array(MAX + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i <= MAX; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= MAX; j += i) {
      isPrime[j] = false;
    }
  }
}

const result = [];

for (const N of input) {
  let cnt = 0;

  for (let i = 2; i <= N / 2; i++) {
    if (isPrime[i] && isPrime[N - i]) {
      cnt++;
    }
  }

  result.push(cnt);
}

console.log(result.join("\n"));
