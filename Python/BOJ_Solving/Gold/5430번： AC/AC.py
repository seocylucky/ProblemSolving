from collections import deque

T = int(input())

for testCase in range(T):
  command = input()
  num = int(input())
  strNumList = input().strip('[]')
  result = 0

  if strNumList:
      numList = deque(map(int, strNumList.split(',')))
  else:
      numList = []

  is_reversed = False

  for i in command:
      if i == "R":
          is_reversed = not is_reversed
      elif i == "D":
          if numList:
              if is_reversed:
                  numList.pop()
              else:
                  numList.popleft()
          else: result = "error"

  if result == "error":
    print(result)
  else: 
    if is_reversed:
            numList.reverse()
    result = list(numList)
    result = str(result)
    result = result.replace(" " , "")
    print(result)