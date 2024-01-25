import sys

n = int(sys.stdin.readline())
d = []

for i in range(n) :
    a = list(map(int, sys.stdin.readline().split()))
    d.append(a)

d.sort()

for i in d :
    print(i[0], i[1])