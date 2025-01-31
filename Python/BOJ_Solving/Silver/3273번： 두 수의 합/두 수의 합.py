# 투포인터
n = int(input())

arr = list(map(int, input().split()))
result = int(input())

arr.sort()

a, b = 0, len(arr)-1
numSum = 0
count = 0

while a < b:
    numSum = arr[a] + arr[b]
    if numSum == result :
      count += 1
      a += 1
      b -= 1
    elif numSum < result:
      a += 1
    else :
      b -= 1
      continue

if n == 1:
  if arr[a] == result:
    count = 1

print(count)