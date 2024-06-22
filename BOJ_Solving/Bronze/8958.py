n = int(input())

for i in range(n) :
    a = list(map(str, input()))
    score = 0
    sum = 0
    for j in a :
        if j == "O" :
            score += 1
            sum += score
        else : score = 0
    print(sum)
