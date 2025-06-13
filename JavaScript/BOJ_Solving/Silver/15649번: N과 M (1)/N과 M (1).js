const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

n = input[0];
m = input[1];

const arr = [];
const visited = new Array({ length: m }).fill(0);

function dfs(k) {
  if (m === k) {
    console.log(arr.join(" "));
    return;
  }
  for (let i = 1; i < n + 1; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    arr.push(i);
    dfs(k + 1);
    arr.pop();
    visited[i] = false;
  }
}

dfs(0);
