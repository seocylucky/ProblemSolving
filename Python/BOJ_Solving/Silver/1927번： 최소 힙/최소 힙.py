import heapq
import sys

N = int(sys.stdin.readline())
q = []

for i in range(N):
  inputNum = int(sys.stdin.readline())
  if inputNum == 0:
    if len(q) == 0:
      print(0)
    elif  len(q):
      print(heapq.heappop(q))
  else :
    heapq.heappush(q, inputNum)