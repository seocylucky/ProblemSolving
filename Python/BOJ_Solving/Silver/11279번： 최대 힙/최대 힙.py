import heapq
import sys

N = int(sys.stdin.readline())
heap = []

for i in range(N):
  inputX = int(sys.stdin.readline())
  if inputX == 0 :
    if len(heap) > 0 :
      print(-heapq.heappop(heap))
    else :
      print(0)
  else : heapq.heappush(heap, -inputX)