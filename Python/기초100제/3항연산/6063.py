a, b = input().split()

a = int(a)
b = int(b)

c = a if a>=b else b # 다른 언어와 다르게 파이썬은 ?와 :가 아닌 if와 else 사용

print(c)