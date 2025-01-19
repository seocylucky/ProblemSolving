import sys

a, b, c = map(int, sys.stdin.readline().split())

def power_mod(a, b, c):
    if b == 0:
        return 1 
    
    if b == 1:
        return a % c
    
    x = power_mod(a, b // 2, c)
    x = (x * x) % c 
    
    if b % 2 == 0:
        return x
    else:
        return (x * a) % c

result = power_mod(a, b, c)
print(result)
