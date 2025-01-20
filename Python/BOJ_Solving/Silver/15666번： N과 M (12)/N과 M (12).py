n, m = map(int, input().split())

arr = list(map(int, input().split()))

resultArr = []

arr = list(set(arr))
arr.sort()

def back(cnt, el, before):
  if cnt == m :
    resultArr.append(el)
  else :
    for i in arr:
      if i >= before:
        before = i
        back(cnt+1, el+[i], before)

back(0, [], 0)

for i in resultArr:
  print(*i)