import sys
from collections import deque
 
input = sys.stdin.readline

N, M, K, X = map(int, input().split())
graph = [[] for _ in range(N + 1)]
distance = [-1] * (N+1)
distance[X] = 0

q = deque([X])

for _ in range(M):
  a, b = map(int, input().split())
  graph[a].append(b)

while q:
  now = q.popleft()

  for i in graph[now]:
    if distance[i] == -1 :
      distance[i] = distance[now] + 1
      q.append(i)

existResult = False

for i in range(1, N+1):
  if distance[i] ==K:
    print(i)
    existResult = True

if existResult == False:
  print(-1)