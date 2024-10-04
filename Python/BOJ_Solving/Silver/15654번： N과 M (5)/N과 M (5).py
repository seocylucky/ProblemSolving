import sys

N, M = map(int, sys.stdin.readline().split())
Nlist = list(map(int, sys.stdin.readline().split()))

Nlist.sort()

arr = []

def dfs(start):
  if len(arr) == M :
    print(*arr)
    return
  for i in range(N):
    if Nlist[i] in arr:
      continue
    arr.append(Nlist[i])
    dfs(i)
    arr.pop()

dfs(0)
