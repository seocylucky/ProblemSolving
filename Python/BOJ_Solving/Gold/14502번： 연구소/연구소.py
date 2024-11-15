import sys
from collections import deque
import copy

N, M = map(int, sys.stdin.readline().split())

graph = [list(map(int,sys.stdin.readline().rstrip().split())) for _ in range(N)]
  
def makeWall(count):
  if count == 3:
    bfs()
    return
  for i in range(N):
    for j in range(M):
      if graph[i][j] == 0:
        graph[i][j] = 1
        makeWall(count+1)
        graph[i][j] = 0

def bfs():
  dx = [-1, 1, 0, 0]
  dy = [0, 0, -1, 1]

  q= deque()
  virus_graph = copy.deepcopy(graph)

  for i in range(N):
    for j in range(M):
      if virus_graph[i][j] == 2:
        q.append((i, j))

  while q:
    x, y = q.popleft()
    
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]
    
      if 0 <= nx < N and 0 <= ny < M:
        if virus_graph[nx][ny] == 0:
          virus_graph[nx][ny] = 2
          q.append((nx, ny))

  count = 0

  for i in range(N):
    count += virus_graph[i].count(0)
  
  global answer

  answer = max(answer, count)


answer = 0
makeWall(0)
print(answer)
