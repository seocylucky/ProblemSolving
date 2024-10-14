import sys
from collections import deque

N, M = map(int, sys.stdin.readline().split())

graph = []
dx, dy = [-1, 0, 1, 0], [0, -1, 0, 1]

for _ in range(N):
  graph.append(list(map(int, sys.stdin.readline().rstrip())))

def bfs(x, y):
  q = deque([(x, y)])

  while q:
    x, y = q.popleft()

    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]

      if 0 <= nx < N and 0 <= ny < M and graph[nx][ny] == 1:
        q.append((nx,ny))
        graph[nx][ny] = graph[x][y] + 1

  return(graph[N-1][M-1])

print(bfs(0, 0))