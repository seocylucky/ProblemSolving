function dfs(graph, start) {
  const need_visited = [start];
  const visited = [];

  while (need_visited.length > 0) {
    const node = need_visited.pop();

    if (!visited.includes(node)) {
      visited.push(node);
      need_visited.push(...graph[node]);
    }
  }

  return visited;
}

const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: [],
};

console.log(dfs(graph, "A"));
