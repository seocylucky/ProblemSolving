num = int(input())

for i in range(num-1, -1, -1) :
    for k in range(i-1, -1, -1) :
        print(" ", end="")
    for j in range(1, num-i+1, 1) :
        print("*", end = "")
    print()