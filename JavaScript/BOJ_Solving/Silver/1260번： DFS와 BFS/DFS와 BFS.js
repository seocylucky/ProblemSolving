const readline = require("readline");

(async () => {
  const rl = readline.createInterface({ input: process.stdin });
  let N = 0;
  let M = 0;
  let V = 0;
  let graph = [];

  let lineIdx = 0;

  for await (const line of rl) {
    if (lineIdx === 0) {
      const inputArr = line.split(" ").map(Number);
      [N, M, V] = inputArr;
      graph = Array.from({ length: N + 1 }, () => []);
    } else {
      const [from, to] = line.split(" ").map(Number);
      graph[from].push(to);
      graph[to].push(from);
      if (lineIdx === M) {
        rl.close();
      }
    }
    lineIdx++;
  }

  graph.forEach((edges) => edges.sort((a, b) => a - b));

  console.log(dfs(V, graph).join(" "));
  console.log(bfs(V, graph).join(" "));
  process.exit();
})();

const dfs = (start, graph) => {
  const visited = [];
  const stack = [start];

  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited.includes(node)) {
      visited.push(node);
      stack.push(
        ...graph[node]
          .filter((neighbor) => !visited.includes(neighbor))
          .reverse()
      );
    }
  }

  return visited;
};

const bfs = (start, graph) => {
  const visited = [];
  const queue = [start];

  while (queue.length > 0) {
    const node = queue.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      queue.push(
        ...graph[node].filter((neighbor) => !visited.includes(neighbor))
      );
    }
  }

  return visited;
};
