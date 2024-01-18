d = []
for i in range(19) :
    d.append([])
    for j in range(19) :
        d[i].append(0)

for i in range(19) :
    d[i] = list(map(int, input().split()))


n = int(input())

for x in range(n) :
    a, b = input().split()
    for i in range(19) :
        if d[int(a)-1][i] == 0 :
            d[int(a)-1][i] = 1
        else : d[int(a)-1][i] = 0

        if d[i][int(b)-1] == 0 :
            d[i][int(b)-1] = 1
        else : d[i][int(b)-1] = 0

for i in range(19) :
    for j in range(19) :
        print(d[i][j], end=" ")
    print()