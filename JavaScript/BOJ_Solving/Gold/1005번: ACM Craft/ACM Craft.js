const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

idx = 0;

const line = parseInt(input[idx++]);

for (let i = 0; i < line; i++) {
  const [N, K] = input[idx++].split(" ").map(Number);

  const times = input[idx++].split(" ").map(Number);

  const graph = Array.from({ length: N + 1 }, () => []);

  const indegree = Array.from({ length: N + 1 }).fill(0);

  const dp = Array.from({ length: N + 1 }).fill(0);

  for (let i = 0; i < K; i++) {
    const [X, Y] = input[idx++].split(" ").map(Number);
    graph[X].push(Y);
    indegree[Y]++;
  }

  const W = input[idx++];

  const queue = [];

  for (let i = 1; i < N + 1; i++) {
    if (indegree[i] === 0) {
      dp[i] = times[i - 1];
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const current = queue.shift();

    for (const next of graph[current]) {
      indegree[next]--;
      dp[next] = Math.max(dp[next], dp[current] + times[next - 1]);

      if (indegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  console.log(dp[W]);
}
