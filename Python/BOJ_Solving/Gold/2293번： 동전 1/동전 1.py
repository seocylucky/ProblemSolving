import sys

n, k = map(int, sys.stdin.readline().split())
coinList = [int(sys.stdin.readline()) for _ in range(n)]
dp = [0 for i in range(k + 1)]
dp[0] = 1

for i in coinList:
    j = i
    while j <= k:
        dp[j] += dp[j - i]
        j += 1

print(dp[k])