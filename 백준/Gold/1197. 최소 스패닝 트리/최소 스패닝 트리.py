import sys
sys.setrecursionlimit(10**5)

V, E = map(int, sys.stdin.readline().split())
parent = [i for i in range(V+1)]
edges = []
result = 0

def find(parent, x):
  if parent[x] != x:
    parent[x] = find(parent, parent[x])
  return parent[x]

def union(a, b):
  a = find(parent, a)
  b = find(parent, b)

  if a == b : return
  else: parent[b] = a

for _ in range(E):
  A, B, C = map(int, sys.stdin.readline().split())
  edges.append((C, A, B))

edges.sort()

for edge in edges:
  C, A, B = edge
  if find(parent, A) != find(parent, B):
    union(A, B)
    result += C

print(result)