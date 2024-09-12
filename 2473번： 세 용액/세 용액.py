import sys

N = int(sys.stdin.readline().rstrip())
arr = list(map(int, sys.stdin.readline().split()))
sorted(arr)

resultArr = []

start = 0
end = N-1
mid = start + 1
minSum = 3000000000
curSum = 0

for start in range(N-2):
  while mid < end : 
    curSum = arr[start] + arr[mid] + arr[end]

  if curSum < minSum :
    minSum = curSum
    resultArr = [arr[start], arr[mid], arr[end]]


print(sorted(resultArr))