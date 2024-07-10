d = []

for i in range(10) :
    n = int(input())
    remain = n%42
    if remain not in d : # 중복 제거
        d.append(remain)

print(len(d))