import sys

N = int(sys.stdin.readline())

arr = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

for k in range(N):
  for i in range(N):
    for j in range(N):
      if (arr[i][j] == 1) or (arr[i][k] == 1 and arr[k][j] == 1):
        arr[i][j] = 1

for i in range(N) :
  print(*arr[i])
