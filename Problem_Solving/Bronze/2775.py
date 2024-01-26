count = int(input())
man = 0

for i in range(count) :
    k = int(input())
    n = int(input())
    bottom = [x for x in range(1, n+1)]
    for j in range(1, k+1) :
        for k in range(1, n) :
            bottom[k] += bottom[k-1]
    print(bottom[-1])
