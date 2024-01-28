n = int(input())
d = []

for i in range(n) :
    age, name = input().split()
    d.append([int(age), name])

result = sorted(d, key = lambda x: int(x[0])) # int로 감싸줘야 함

for i in result :
    print(i[0], i[1])