n, k = input().split()

n = int(n)
k = int(k)
d = []
result = []

for i in range(n) :
    d.append(i+1)

while len(d) != 0 :
    for i in range(k) :
        if i <= k-2 :
            d.append(d[0])
            d.remove(d[0])
        if i == k-1 :
            result.append(d[0])
            d.remove(d[0])

print("<", end = "")
for i in result :
    if i == result[len(result)-1] :
        print(i, end="")
    else: print(i, end = ", ")
print(">")