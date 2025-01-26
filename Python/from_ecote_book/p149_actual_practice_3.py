# dfs

n, m = map(int, input().split())
graph = [ list(map(int, input())) for _ in range(n)]
count = 0

def dfs(x, y):
  # 벗어난 범위일 경우 처리
  if x <= -1 or x >= n or y <= -1 or y >= m:
    return False
  else:
    # 0인 경우, 상하좌우 다 돌면서 깊이우선 탐색 진행. 
    if graph[x][y] == 0:
      graph[x][y] = 1
      dfs(x-1, y)
      dfs(x, y-1)
      dfs(x+1, y)
      dfs(x, y+1)
      return True
    return False

for i in range(n):
  for j in range(m):
    if dfs(i, j) == True:
      count += 1

print(count)