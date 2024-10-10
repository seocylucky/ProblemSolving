import sys

N = int(sys.stdin.readline())
dragonCurve = [list(map(int, sys.stdin.readline().split(' '))) for i in range(N)]
curveDirection = [[] for i in range(N)]

dx = [1, 0, -1, 0]
dy = [0, -1, 0, 1]

for i in range(N):
  x, y, d, g = dragonCurve[i]
  curveDirection[i].append(d)

  for _ in range(g):
    reverse_direction = list(reversed(curveDirection[i]))
    
    for j in reverse_direction:
      if j + 1 == 4 :
        curveDirection[i].append(0)
      else:
        curveDirection[i].append(j+1)

graph = [[False] * 101 for _ in range(101)]

for i in range(N):
  x, y, d, g = dragonCurve[i]
  graph[y][x] = True

  for j in curveDirection[i]:
    x, y = x + dx[j], y + dy[j]
    if 0 <= x <= 100 and 0 <= y <= 100:
      graph[y][x] = True

result = 0

for i in range(100):
  for j in range(100):
    if graph[j][i] and graph[j+1][i] and graph[j][i+1] and graph[j+1][i+1]:
      result += 1

print(result)

