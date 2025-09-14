# x 입력
x = int(input())

# 계산된 결과를 저장하기 위한 dp 테이블
d = [0] * 30001

# dp 보텀업 진행
for i in range(2, x+1):
    d[i] = d[i-1] + 1

    if i % 2 == 0:
        d[i] = min(d[i], d[i//2] + 1)
    if i % 3 == 0:
        d[i] = min(d[i], d[i//3] + 1)
    if i % 5 == 0:
        d[i] = min(d[i], d[i//5] + 1)

print(d[x])