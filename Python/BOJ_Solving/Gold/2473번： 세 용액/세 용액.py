import sys

N = int(sys.stdin.readline().rstrip())
arr = list(map(int, sys.stdin.readline().split()))
arr = sorted(arr)

resultArr = []

start = 0
minSum = 3000000000
curSum = 0

for start in range(N-2):
  end = N-1
  mid = start + 1

  while mid < end : 
    curSum = arr[start] + arr[mid] + arr[end]

    if abs(curSum) < abs(minSum) :
      minSum = curSum
      resultArr = [arr[start], arr[mid], arr[end]]

    if curSum < 0:
        mid += 1
    else:
        end -= 1


for i in resultArr:
  print(i, end=' ')