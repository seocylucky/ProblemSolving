N = int(input())
d = []

for i in range(N) :
    a = input()
    d.append(a)

d = list(set(d)) # 중복 제거
d.sort() # 사전별 정렬
d.sort(key=len) # 길이 기준 정렬

for i in d :
    print(i)