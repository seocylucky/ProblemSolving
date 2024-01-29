import sys
from collections import deque

n = int(sys.stdin.readline())
d = []

for i in range(n) :
    a = int(sys.stdin.readline())
    if a == 0 :
        d.pop()
    else :
        d.append(a)

print(sum(d))