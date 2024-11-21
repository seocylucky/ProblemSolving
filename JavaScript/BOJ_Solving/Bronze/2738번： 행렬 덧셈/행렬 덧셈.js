const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let N;
  let M;
  let A = [];
  let B = [];

  let lineIdx = 0;

  for await (const line of rl) {
    if (lineIdx === 0) {
      [N, M] = line.split(" ").map(Number);
    } else if (1 <= lineIdx && lineIdx <= N) {
      A.push(line.split(" ").map(Number));
    } else if (N < lineIdx && lineIdx <= 2 * N) {
      B.push(line.split(" ").map(Number));
    } else if (lineIdx === 2 * N + 1) {
      B.push(line.split(" ").map(Number));
      rl.close();
    }
    lineIdx++;
  }

  solution(A, B, N, M);
  process.exit();
})();

const solution = (A, B, N, M) => {
  let graph = Array.from({ length: N }, () => Array(M).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      graph[i][j] += A[i][j] + B[i][j];
    }
  }

  for (let i = 0; i < N; i++) {
    console.log(graph[i].join(" "));
  }
};
