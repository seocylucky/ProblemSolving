import sys

n, m = map(int, sys.stdin.readline().split())
parent = [i for i in range(n+1)]

def find(parent, x):
  if parent[x] != x:
    parent[x] = find(parent, parent[x])
  return parent[x]

def union(a, b):
  a = find(parent, a)
  b = find(parent, b)

  if a == b : return
  else: parent[b] = a


for i in range(m):
  num, a, b = map(int, sys.stdin.readline().split())

  if num == 0:
    union(a, b)
  else:
    if find(parent, a) == find(parent, b):
      print("YES")
    else:
      print("NO")