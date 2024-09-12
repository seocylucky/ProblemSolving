import sys
sys.setrecursionlimit(10**5)

N = int(sys.stdin.readline())

graph = [list(sys.stdin.readline().rstrip()) for _ in range(N)]
visited = [[0] * N for _ in range(N)]

#좌우
dx = [-1, 1, 0, 0]
#상하
dy = [0, 0, 1, -1]

def dfs(x, y):
  visited[x][y] = 1
  cur = graph[x][y]

  for k in range(4):
    nx = x + dx[k]
    ny = y + dy[k]

    if 0 <= nx < N and 0 <= ny < N and visited[nx][ny] == 0:
        if graph[nx][ny] == cur:
            dfs(nx, ny)

normal = 0
blindness = 0

for i in range(N):
  for j in range(N):
    if visited[i][j] == 0:
      dfs(i, j)
      normal += 1

for i in range(N):
  for j in range(N):
    if graph[i][j] == 'G':
      graph[i][j] = 'R'

visited = [[0]* N for _ in range(N)]

for i in range(N):
  for j in range(N):
    if visited[i][j] == 0:
      dfs(i, j)
      blindness += 1

print(normal, blindness)