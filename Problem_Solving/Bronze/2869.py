import sys

a, b, v = sys.stdin.readline().split()
a = int(a)
b = int(b)
v = int(v)

# v - b == 이동해야 할 거리
# a - b == 하루에 이동하는 거리

if (v-b)/(a-b) > int((v-b)/(a-b)) :
    print(int((v - b) / (a - b)) + 1)
else :
    print(int((v - b) / (a - b)))