N = int(input())
arr = []

for _ in range(N):
    a, b = map(int, input().split())
    arr.append((a, b))

dp = [0] * (N + 1)

for i in range(N):
    day, money = arr[i]
    if i + day <= N:
        dp[i + day] = max(dp[i + day], dp[i] + money)
    dp[i + 1] = max(dp[i + 1], dp[i])

print(dp[N])
