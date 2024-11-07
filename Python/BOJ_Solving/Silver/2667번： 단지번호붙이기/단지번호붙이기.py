import sys
from collections import deque

N = int(sys.stdin.readline())
graph = [list(sys.stdin.readline().rstrip()) for _ in range(N)]
result = []

def bfs(x, y):
  global count

  dx = [-1, 1, 0, 0]
  dy = [0, 0, -1, 1]
  q = deque([(x, y)])

  while q:
    x, y = q.popleft()

    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]
      
      if 0 <= nx < N and 0 <= ny < N:
        if graph[nx][ny] == '1':
          graph[nx][ny] = 0
          count += 1
          q.append((nx, ny))

for i in range(N):
  for j in range(N):
    if graph[i][j] == '1':
      graph[i][j] = 0
      count = 1
      bfs(i, j)
      result.append(count)

result.sort()
print(len(result))
print(*result, sep='\n')
