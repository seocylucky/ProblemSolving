w, h, b = input().split()

w = int(w)
h = int(h)
b = int(b)

storage = w * h * b / 8 / 1024**2

print(format(storage, ".2f"), "MB")