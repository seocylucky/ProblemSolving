N = input("거슬러주어야 할 돈: ")

N = int(N)

arr = [500, 100, 50, 10]

cnt = 0

for i in arr :
    cnt += N//i
    N = N%i

print(cnt)