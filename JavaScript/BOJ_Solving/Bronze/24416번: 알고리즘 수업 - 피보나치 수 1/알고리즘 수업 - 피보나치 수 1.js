const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input[0]);

function fib(n) {
  if (n === 1 || n === 2) return 1;
  else {
    return fib(n - 1) + fib(n - 2);
  }
}

function fibonacci(n) {
  let cnt = 0;
  const f = Array.from({ length: n + 1 }).fill(0);
  f[1] = 1;
  f[2] = 1;

  for (let i = 3; i < n + 1; i++) {
    cnt += 1;
    f[i] = f[i - 1] + f[i - 2];
  }

  return cnt;
}

console.log(fib(n), fibonacci(n));
