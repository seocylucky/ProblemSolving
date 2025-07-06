const [a, b, c] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

if (c % 2) {
  console.log(a ^ b);
} else {
  console.log(a);
}
