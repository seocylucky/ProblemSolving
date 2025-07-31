const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const t = parseInt(input[0]);
let line = 1;

for (let testcase = 0; testcase < t; testcase++) {
  const [n, m] = input[line].split(" ").map(Number);
  line++;

  for (let i = 0; i < m; i++) {
    line++;
  }

  console.log(n - 1);
}
