const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const t = parseInt(input[0]);

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

for (let i = 1; i <= t; i++) {
  const [n1, n2] = input[i].split(" ").map(Number);
  const g = gcd(n1, n2);
  const lcm = (n1 * n2) / g;
  console.log(lcm);
}
