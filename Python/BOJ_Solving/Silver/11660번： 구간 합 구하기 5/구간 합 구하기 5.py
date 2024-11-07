import sys

N, M = map(int, sys.stdin.readline().split())

graph = [[0] * (N + 1)]

for _ in range(N):
    graph.append([0] + list(map(int, sys.stdin.readline().rstrip().split())))
    
sumArr = [[0]*(N+1) for _ in range(N+1)]
result = []

for i in range(1, N+1):
  for j in range(1, N+1):
    sumArr[i][j] = graph[i][j] + sumArr[i-1][j] + sumArr[i][j-1] - sumArr[i-1][j-1]

for _ in range(M):
  x1, y1, x2, y2 = map(int, sys.stdin.readline().split())
  result.append(sumArr[x2][y2] - sumArr[x2][y1-1] - sumArr[x1-1][y2] + sumArr[x1-1][y1-1])

print(*result, sep='\n')
  