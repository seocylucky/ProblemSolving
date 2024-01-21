n = int(input())

for i in range(n) :
    count, a = list(map(str, input().split()))
    count = int(count)
    for j in a :
        print(j*count, end="")
    print()