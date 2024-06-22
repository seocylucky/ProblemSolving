n = int(input())

for i in range(n) :
    a = input()
    d = []

    for j in a :
        if j == "(" :
            d.append(j)
        elif j == ")" :
            if len(d) != 0 and d[0] != ")" :
                d.pop()
            else :
                d.append(j)

    if len(d) == 0 :
        print("YES")
    else :
        print("NO")