import sys

N = int(sys.stdin.readline().rstrip())
array = sorted(list(map(int, sys.stdin.readline().split())))

resultArr = []
minSum = 2000000000
curSum = 0
start = 0
end = N-1



while start < end :
  curSum = array[start] + array[end]
  if abs(curSum) < abs(minSum) :
    minSum = curSum
    resultArr = [array[start], array[end]]

  if curSum > 0:
      end -= 1
  else:
      start += 1


for i in resultArr :
  print(i, end=' ')