N, M = map(int, input().split())

result = 0

for _ in range(N):
  data = list(map(int, input().split()))
  maxDataNum = min(data)

  result = max(result, maxDataNum)

print(result)