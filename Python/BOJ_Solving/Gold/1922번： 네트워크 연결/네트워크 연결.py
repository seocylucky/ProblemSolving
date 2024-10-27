import sys
sys.setrecursionlimit(10**5)

N = int(sys.stdin.readline())
M = int(sys.stdin.readline())
parent = [i for i in range(N+1)]
edges = []
result = 0

for _ in range(M):
  a, b, c = map(int, sys.stdin.readline().split())
  edges.append((c, a, b))

edges.sort()

def find(parent, x):
  if parent[x] != x:
    parent[x] = find(parent, parent[x])
  return parent[x]

def union(parent, a, b):
  a = find(parent, a)
  b = find(parent, b)

  if a < b :
    parent[b] = a
  else: parent[a] = b

for edge in edges:
  c, a, b = edge

  if find(parent, a) != find(parent, b):
    union(parent, a, b)
    result += c

print(result)