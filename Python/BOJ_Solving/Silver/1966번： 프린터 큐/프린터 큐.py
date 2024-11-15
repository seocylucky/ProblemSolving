from collections import deque

T = int(input())

for testCase in range(T):
  N, M = map(int, input().split())
  arr = list(map(int, input().split()))
  result = 1

  q = deque(arr)
  
  while(True):
    if q[0] == max(q):
      if M == 0:
        print(result)
        break
      else:
        q.popleft()
      result += 1
    else:
      q.append(q.popleft())
    
    M -= 1
    if M < 0:
      M = len(q) - 1
