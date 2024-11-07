import sys
from collections import deque

n, m = map(int, sys.stdin.readline().split())

graph = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]
visited = [[0]*m for _ in range(n)]

def bfs(start, graph, visited):
  dx = [-1, 1, 0, 0]
  dy = [0, 0, -1, 1]

  q = deque([(start)])
  visited[start[0]][start[1]] = 0

  while q:
    x, y = q.popleft()

    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]

      if 0 <= nx < n and 0 <= ny < m :
        if visited[nx][ny] == 0 and graph[nx][ny] == 1:
          visited[nx][ny] = visited[x][y] + 1
          q.append((nx, ny))


for i in range(n):
  for j in range(m):
    if graph[i][j] == 2 :
      start = (i, j)
    # elif graph[i][j] == 0 :
    #   visited[i][j] = 1

bfs(start, graph, visited)

for i in range(n):
    for j in range(m):
        if visited[i][j] == 0 and graph[i][j] == 1:
            print(-1, end=' ')
        else:
            print(visited[i][j], end=' ')
    print() 