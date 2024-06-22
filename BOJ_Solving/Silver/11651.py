import sys

n = int(sys.stdin.readline())
d = []

for i in range(n) :
    x, y = list(map(int, sys.stdin.readline().split()))
    d.append([y, x])

d.sort()

for i in d :
    print(i[1], i[0])