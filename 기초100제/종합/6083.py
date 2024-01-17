r, g, b = input().split()

r = int(r)
g = int(g)
b = int(b)
count = 0

for i in range(0, r, 1) :
    for j in range(0, g, 1) :
        for k in range(0, b, 1) :
            print(i, j, k)
            count += 1

print(count)