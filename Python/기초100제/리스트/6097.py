h, w = input().split()

# h랑 w 잘 봐라!

h = int(h)
w = int(w)
n = int(input())
listd = []

for i in range(h) :
    listd.append([])
    for j in range(w) :
        listd[i].append(0)

for i in range(n) :
    l, d, x, y = map(int, input().split())
    if d == 0 :
        for j in range(l) :
            listd[x-1][y-1+j] = 1
    if d == 1 :
        for j in range(l) :
            listd[x-1+j][y-1] = 1

for i in range(h) :
    for j in range(w) :
        print(listd[i][j], end = " ")
    print()


