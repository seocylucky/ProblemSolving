import sys
sys.setrecursionlimit(10**5)

n = int(sys.stdin.readline())
calA, calB = map(int, sys.stdin.readline().split())
m = int(sys.stdin.readline())

graph = [[0]*n for _ in range(n+1)]
visited = [0] * (n+1)
result = []
cnt = 0

def dfs(x, cnt):
  cnt += 1
  visited[x] = 1
  
  if x == calB :
    result.append(cnt)
  for i in graph[x] :
    if not visited[i] :
      dfs(i, cnt)
  

for i in range(m):
  x, y = map(int, sys.stdin.readline().split())
  graph[x].append(y)
  graph[y].append(x)

dfs(calA , 0)

if len(result) == 0 :
  print(-1)
else : print(result[0]-1)

  # 1 - 2, 3
  # 2 - 7, 8, 9
  # 3 - x
  # 4 - 5, 6