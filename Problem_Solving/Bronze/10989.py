import sys

n = int(sys.stdin.readline())
d = [0] * 10000

for i in range(n) :
    a = int(sys.stdin.readline())
    d[a-1] += 1

for i in range(10000) :
    if d[i] != 0 :
        for j in range(d[i]) :
            print(i+1)