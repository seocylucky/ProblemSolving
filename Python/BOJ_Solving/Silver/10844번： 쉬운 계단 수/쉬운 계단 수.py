import sys

N = int(sys.stdin.readline().rstrip())

dp = [[0] * 10 for _ in range(101)]
dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1]

for i in range(2, N+1):
  for k in range(10):
    if k == 0 :
      dp[i][0] = dp[i-1][1] 
    elif k == 9 :
      dp[i][9] = dp[i-1][8]
    else :
      dp[i][k] = dp[i-1][k-1] + dp[i-1][k+1]

print(sum(dp[N]) % 1000000000)