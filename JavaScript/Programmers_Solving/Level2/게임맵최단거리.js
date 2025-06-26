class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(maps) {
  var answer = 0;

  const move = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  const n = maps.length;
  const m = maps[0].length;

  const dist = Array.from({ length: n }, () => Array(m).fill(-1));

  function bfs(start) {
    const q = new Queue();
    q.push(start);

    dist[start[0]][start[1]] = 1;

    while (!q.isEmpty()) {
      const here = q.pop();

      for (const [dx, dy] of move) {
        const row = here[0] + dx;
        const col = here[1] + dy;

        if (row < 0 || row >= n || col < 0 || col >= m) continue;

        if (maps[row][col] === 0) continue;

        if (dist[row][col] === -1) {
          q.push([row, col]);
          dist[row][col] = dist[here[0]][here[1]] + 1;
        }
      }
    }

    return dist;
  }

  bfs([0, 0]);

  return dist[n - 1][m - 1];
}
