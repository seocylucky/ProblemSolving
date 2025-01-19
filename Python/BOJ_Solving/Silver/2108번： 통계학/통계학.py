from collections import Counter

n = int(input())
arr = []

for i in range(n):
  arr.append(int(input()))

def one() :
  arrSum = 0
  for i in arr:
    arrSum += i
  print(round(arrSum / n))

def two() :
  arr2 = arr.copy()
  arr2.sort()
  arrAvgIdx = len(arr2) // 2
  print(arr2[arrAvgIdx])

def three() :
  counter = Counter(arr)
  max_count = max(counter.values())

  modes = [key for key, value in counter.items() if value == max_count]

  if len(modes) > 1:
    modes.sort()
    print(modes[1])
  else:
    print(modes[0])
def four() :
  maxNum = max(arr)
  minNum = min(arr)
  print(maxNum - minNum)

one()
two()
three()
four()