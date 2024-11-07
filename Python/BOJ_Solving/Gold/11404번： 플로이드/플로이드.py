import sys

n = int(sys.stdin.readline())
m = int(sys.stdin.readline())

INF = int(1e9)

graph = [[INF] * (n+1) for _ in range(n+1)]

for i in range(1, n+1):
    graph[i][i] = 0

for _ in range(m):
  a, b, c = map(int, sys.stdin.readline().split())
  graph[a][b] = min(graph[a][b], c) 

for k in range(1, n+1):
    for a in range(1, n+1):
        for b in range(1, n+1):
            graph[a][b] = min(graph[a][b], graph[a][k] + graph[k][b])

for x in range(1, n+1):
    for y in range(1, n+1):

        if graph[x][y] == INF: 
          print(0, end=' ')
          
        else: print(graph[x][y], end=' ')

    print()
