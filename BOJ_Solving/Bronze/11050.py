a, b = input().split()

a = int(a)
b = int(b)
factorialA = 1
factorialB = 1
factorialC = 1

for i in range(1, a+1, 1) :
    factorialA *= i

for i in range(1, b+1, 1) :
    factorialB *= i

for i in range(1, a-b+1, 1) :
    factorialC *= i

print(int(factorialA/(factorialB*factorialC)))