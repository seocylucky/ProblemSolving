const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function gcd(n1, n2) {
  return n2 === 0 ? n1 : gcd(n2, n1 % n2);
}

const gcd_num = gcd(input[0], input[1]);

const result = (input[0] * input[1]) / gcd_num;

console.log(result);
