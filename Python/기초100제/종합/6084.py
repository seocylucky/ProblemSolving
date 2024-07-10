h, b, c, s = input().split()

h = int(h)
b = int(b)
c = int(c)
s = int(s)

storage = h * b * c * s / 8 / 1024**2

print(format(storage, ".1f"), "MB")