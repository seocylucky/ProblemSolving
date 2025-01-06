N, M, K = map(int, input().split(" "))

arr = list(map(int, input().split(" ")))

numCnt = 0
cnt = 1
kCnt = 1
result = 0
isMaxNumPlus = True
maxNum = max(arr)

for i in arr :
  if i == maxNum:
    numCnt += 1

while cnt <= M:
  if isMaxNumPlus :
    result += maxNum
    cnt += 1
    kCnt += 1

    if kCnt > K :
      isMaxNumPlus = False
  else :
    kCnt = 1
    arr2 = arr.copy()
    arr2.remove(maxNum)
    result += max(arr2)
    cnt += 1
    isMaxNumPlus = True

print(result)