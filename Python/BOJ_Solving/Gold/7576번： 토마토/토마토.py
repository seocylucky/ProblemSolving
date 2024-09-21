import sys
from collections import deque

M, N = map(int, sys.stdin.readline().split())

graph = []
for _ in range(N):
    graph.append(list(map(int, input().split())))

q = deque()
num = 0

for i in range(N):
  for j in range(M):
    if graph[i][j] == 1:
      q.append([i, j])

def bfs():
  while q:
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    x, y = q.popleft()
    
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]
      
      if 0 <= nx < N and 0 <= ny < M and graph[nx][ny] == 0 :
        graph[nx][ny] = graph[x][y] + 1
        q.append([nx, ny])

bfs()

for i in graph:
  for j in i:
    if j == 0 :
      print(-1)
      exit()
    else :
      num = max(num, max(i))

print(num-1)