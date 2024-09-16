import sys

N = int(sys.stdin.readline().rstrip())
rgbList = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

dp = [[0]*3 for _ in range(N)]

dp[0][0] = rgbList[0][0]
dp[0][1] = rgbList[0][1]
dp[0][2] = rgbList[0][2]

for i in range(1, N):
  dp[i][0] = rgbList[i][0] + min(dp[i-1][1], dp[i-1][2])
  dp[i][1] = rgbList[i][1] + min(dp[i-1][0], dp[i-1][2])
  dp[i][2] = rgbList[i][2] + min(dp[i-1][0], dp[i-1][1])

print(min(dp[i][0], dp[i][1], dp[i][2]))