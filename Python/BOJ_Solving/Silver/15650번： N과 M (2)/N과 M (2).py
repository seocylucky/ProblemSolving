import sys

N, M = map(int, sys.stdin.readline().split())
visited = []

def dfs(start):
  if len(visited) == M :
    print(' '.join(map(str, visited)))
    return
  for i in range(start, N+1):
    if i not in visited:
      visited.append(i)
      dfs(i+1)
      visited.pop()

dfs(1)