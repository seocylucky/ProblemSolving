a = list(map(str, input().lower()))
d = []

for i in range(26) :
    d.append("-1")

for i in range(26) :
    if chr(i + 97) in a :
        d[i] = str(a.index(chr(i + 97)))

print(' '.join(d))
