import sys
from collections import deque

N = int(sys.stdin.readline())
graph = [[] for _ in range(N+1)]
parent = [0] * (N+1)

for _ in range(N-1):
  a, b = map(int, sys.stdin.readline().split())
  graph[a].append(b)
  graph[b].append(a)

def bfs(x):
  q = deque([x])
  
  while q:
    cur = q.popleft()

    for i in graph[cur]:
      if parent[i] == 0:
        parent[i] = cur
        q.append(i)

bfs(1)

for i in range(2, len(parent)):
  print(parent[i], end='\n')