import sys
import heapq

N = int(sys.stdin.readline())
arr = []
secArr = []
sum = 0

for _ in range(N) :
  heapq.heappush(arr, int(sys.stdin.readline()))

while len(arr) > 1 :
  minNum = heapq.heappop(arr)
  secMinNum = heapq.heappop(arr)
  sum += minNum + secMinNum
  heapq.heappush(arr, minNum + secMinNum)

print(sum)