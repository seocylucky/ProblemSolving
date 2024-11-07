import sys

N = int(sys.stdin.readline())

A = list(map(int, sys.stdin.readline().split()))

result = [0] * (N)
result[0] = A[0]

for i in range(N):
  for j in range(i):
    if A[j] < A[i]:
      result[i] = max(result[i], result[j]+A[i])
    else :
      result[i] = max(result[i], A[i])

print(max(result))

