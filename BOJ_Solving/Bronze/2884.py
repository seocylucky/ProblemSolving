h, m = input().split()

h = int(h)
m = int(m)

m = 60 - (45 - m)

if 0 <= m < 15 :
    h = h
elif 15 <= m <= 59 :
    if h == 0 :
        h = 23
    else : h -= 1
elif m == 60 :
    m = 0
    h = h
elif m > 60 :
    m = m - 60
    h = h

print(h, m)