import sys
from collections import deque

def Calculate1(a) :
  return a * 2

def Calculate2(b) :
  b = int(str(b) + str(1))
  return b

A, B = map(int, sys.stdin.readline().split())
q = deque([(A, 1)])
found = False

while q :
  a, cnt = q.popleft()
  if a == B :
    found = True
    break
  if Calculate1(a) <= B :
    q.append((Calculate1(a), cnt + 1))
  if Calculate2(a) <= B :
    q.append((Calculate2(a), cnt + 1))

if not found:
  print(-1)
else: print(cnt)
  