M = int(input())

for i in range(1, M+1) :
    M_sum = sum(map(int, str(i))) # 각 자릿수 더함
    N = i + M_sum
    if M == N :
        print(i)
        break
    if i == M:
        print(0)