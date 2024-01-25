import sys
import collections

n = int(sys.stdin.readline())
d = collections.deque()
count = 0

for i in range(1, n + 1, 1) :
    d.append(i)

while len(d) > 1 :
    count += 1
    if count % 2 == 0:
        d.append(d[0])
    d.popleft()

print(d[0])