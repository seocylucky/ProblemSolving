n, m = map(int, input().split())

a, b, d = map(int, input().split())

visitedMap = [[0]*m for _ in range(n)]
aria = []
visitCount = 1
turn_time = 0

for i in range(n):
  aria.append(list(map(int, input().split())))

# 북동남서
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

def turnLeft():
  global d
  d -= 1
  if d < 0:
    d = 3

while True:
  turnLeft()
  nx = a + dx[d]
  ny = b + dy[d]

  if aria[nx][ny] == 0 and visitedMap[nx][ny] == 0:
    aria[nx][ny] = 1
    a = nx
    b = ny
    visitCount += 1
    turn_time = 0
    continue
  else :
    turn_time += 1
  if turn_time == 4:
    nx = a - dx[d]
    ny = b - dy[d]
    if aria[nx][ny] == 0:
      a = nx
      b = ny
    else:
      break
    turn_time = 0

print(visitCount)


  