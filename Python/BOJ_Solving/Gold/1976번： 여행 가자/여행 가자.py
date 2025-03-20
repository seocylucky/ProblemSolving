n = int(input())
m = int(input())

parent = [i for i in range(n)]

def union(x, y):
  x = find(x)
  y = find(y)

  if x < y :
    parent[y] = x
  else:
    parent[x] = y

def find(x):
    if parent[x] != x:
        parent[x] = find(parent[x])
    return parent[x]

for i in range(n):
  link = list(map(int, input().split()))
  for j in range(n):
    if link[j] == 1:
      union(i, j)

parent = [-1] + parent

path = list(map(int, input().split()))
start = parent[path[0]]

for i in range(1, m):
  if parent[path[i]] != start:
    print("NO")
    break
else:
  print("YES")