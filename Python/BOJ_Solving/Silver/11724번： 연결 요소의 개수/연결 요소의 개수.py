import sys
sys.setrecursionlimit(10000)

def Dfs(n, d) :
  visited[n] = True
  for i in graph[n]:
    if not visited[i]:
        Dfs(i, d + 1)

N, M = map(int, sys.stdin.readline().split())
graph = [[] for _ in range(N+1)]
visited = [False]*(1+N)
cnt = 0

for _ in range(M) :
  u, v = map(int, sys.stdin.readline().split())
  graph[u].append(v)
  graph[v].append(u)

for i in range(1, N+1) :
  if not visited[i] :
    if not graph[i] :
      cnt += 1
      visited[i] = True
    else :
      Dfs(i, 0)
      cnt += 1

print(cnt)