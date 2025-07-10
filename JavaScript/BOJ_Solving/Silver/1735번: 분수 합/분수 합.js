const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [num1_a, num1_b] = input[0].split(" ").map(Number);
const [num2_a, num2_b] = input[1].split(" ").map(Number);

function gcd(n1, n2) {
  return n2 === 0 ? n1 : gcd(n2, n1 % n2);
}

const lcm = (num1_b * num2_b) / gcd(num1_b, num2_b);

const b_result = lcm;
const a_result = num1_a * (b_result / num1_b) + num2_a * (b_result / num2_b);

// 기약분수기에 최대공약수 최종적으로 구해서 나눈 것을 출력
const final_gcd = gcd(a_result, b_result);

console.log(a_result / final_gcd, b_result / final_gcd);
