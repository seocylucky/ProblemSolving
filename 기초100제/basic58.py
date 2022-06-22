# 둘 다 거짓일 경우만 참 출력하기

a, b = input().split()
c = bool(int(a))
d = bool(int(b))
print(not(c or d))