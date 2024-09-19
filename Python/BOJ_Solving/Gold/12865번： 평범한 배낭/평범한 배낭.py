import sys

# N: 물건의 개수, K: 최대 무게
N, K = map(int, sys.stdin.readline().split())

# 가방에 들어있는 물건 리스트
things = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

# N번째 물건까지 최대 무게 K로 저장할 수 있는 최대 가치 저장
dp = [[0] * (K + 1) for _ in range(N + 1)]

for i in range(1, N + 1):
    W, V = things[i - 1] # 6 13
    # 물건을 가방에 넣을 수 있냐 없냐
    for j in range(1, K + 1):
        if j >= W:  # 있어! 가방에 공간이 남아! 가방 가벼워
            # 현재 물건 안 넣었을 때랑 넣었을 때 가치 비교할거야! 더 가치 있는 걸로 간다.
            dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - W] + V)
        else:
            # 없어! 공간 없음! 가방 무거워
            dp[i][j] = dp[i - 1][j]

print(dp[N][K])