import sys

N, M = map(int, sys.stdin.readline().rstrip().split())

array = list(map(int, sys.stdin.readline().split()))
isSum = [0]

for i in range(0, N):
  isSum.append(isSum[i] + array[i])

for _ in range(M):
  start, end = map(int, sys.stdin.readline().split())

  print(isSum[end]-isSum[start-1])