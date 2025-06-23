const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const n = input[0];
const m = input[1];
let arr = Array.from({ length: m }).fill(0);

let result = "";

function dfs(depth) {
  if (depth === m) {
    result += arr.join(" ") + "\n";
    return;
  }

  for (let i = 1; i < n + 1; i++) {
    arr[depth] = i;
    dfs(depth + 1);
  }
}

dfs(0);

console.log(result);
