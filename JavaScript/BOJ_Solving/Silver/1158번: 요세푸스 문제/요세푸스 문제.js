const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function solution(N, K) {
  const queue = [];
  const result = [];

  // 1부터 N까지 큐에 Push
  for (let i = 1; i < N + 1; i++) {
    queue.push(i);
  }

  while (queue.length > 0) {
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.shift());
    }
    result.push(queue.shift());
  }

  return result;
}

console.log("<" + solution(input[0], input[1]).join(", ") + ">");
