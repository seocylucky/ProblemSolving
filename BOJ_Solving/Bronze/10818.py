n = int(input())

# d = [0 for i in range(n)] # 정해진 길이의 리스트 만들기

d = list(map(int, input().split()))

print(min(d), max(d))