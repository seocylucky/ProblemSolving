N = int(input())

scores = list(map(int, input().split()))

max_dp = scores
min_dp = scores

for _ in range(N-1):
    scores = list(map(int, input().split()))

    max_dp = [max(max_dp[0], max_dp[1]) + scores[0], max(max_dp[0], max_dp[1], max_dp[2]) + scores[1], max(max_dp[1], max_dp[2]) + scores[2]]
    min_dp = [min(min_dp[0], min_dp[1]) + scores[0], min(min_dp[0], min_dp[1], min_dp[2]) + scores[1], min(min_dp[1], min_dp[2]) + scores[2]]

print(max(max_dp), min(min_dp))