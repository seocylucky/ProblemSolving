d = []

# d = [[0 for j in range(20)] for i in range(20)]

for i in range(20) :
    d.append([])
    for j in range(20) :
        d[i].append(0)

n = int(input())

for x in range(n) :
    a, b = input().split()
    d[int(a)][int(b)] = 1

for k in range(1, 20) :
    for l in range(1, 20) :
        print(d[k][l], end=" ")
    print()