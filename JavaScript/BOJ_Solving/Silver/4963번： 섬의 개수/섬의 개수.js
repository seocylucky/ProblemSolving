const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let w = 0,
    h = 0;
  let graph = [];
  let isFirstLine = true;

  for await (const line of rl) {
    if (line.trim() === "0 0") {
      rl.close();
      break;
    }
    if (isFirstLine) {
      [w, h] = line.split(" ").map(Number);
      graph = [];
      isFirstLine = false;
    } else {
      graph.push(line.split(" ").map(Number));
      let start = (0, 0);

      if (graph.length === h) {
        console.log(countIslands(w, h, graph));
        isFirstLine = true;
      }
    }
  }

  process.exit();
})();

const countIslands = (w, h, graph) => {
  need_visited = [];
  const ds = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];
  visited = Array.from({ length: h }, () => Array(w).fill(0));
  let islandCount = 0;
  const isInBounds = (x, y) => x >= 0 && y >= 0 && x < h && y < w;

  const dfs = (x, y) => {
    visited[x][y] = true;

    for (const [dx, dy] of ds) {
      const nx = x + dx;
      const ny = y + dy;
      if (isInBounds(nx, ny) && !visited[nx][ny] && graph[nx][ny] === 1) {
        dfs(nx, ny);
      }
    }
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (graph[i][j] === 1 && !visited[i][j]) {
        dfs(i, j);
        islandCount++;
      }
    }
  }
  return islandCount;
};
