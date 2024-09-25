import sys

N = int(sys.stdin.readline())
array = []
dp = [1]*N

for i in range(N):
  array.append(list(map(int, sys.stdin.readline().split())))

array.sort()

for i in range(1,N):
  for j in range(0, i):
    if array[j][1] < array[i][1]:
      dp[i] = max(dp[i], dp[j]+1)

print(N-max(dp))