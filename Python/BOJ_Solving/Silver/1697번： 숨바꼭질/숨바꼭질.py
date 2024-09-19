import sys
from collections import deque

N, K = map(int, sys.stdin.readline().split())
disttime = [0] * 100001

def bfs() :
  q = deque([N])
  
  while q :
    n = q.popleft()
    if n == K :
      print(disttime[n])
      break
    for x in (n-1, n+1, n*2):
      if 0 <= x <= 100000 and not disttime[x]:
        disttime[x] = disttime[n] + 1
        q.append(x)

bfs()
