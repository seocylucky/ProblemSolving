# n과 식량 창고 배열 입력
n = int(input())
arr = list(map(int, input().split(' ')))

# 앞서 계산된 결과를 저장하기 위한 테이블
dp = [0] * 100

dp[0] = arr[0]
dp[1] = arr[1]

# 보텀업 진행
for i in range(2, n):
    dp[i] = max(dp[i - 1], dp[i-2] + arr[i])

print(dp[n-1])