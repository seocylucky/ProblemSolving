import sys

N = int(sys.stdin.readline())

lst=list(map(int,sys.stdin.readline().split()))

T, P = map(int, sys.stdin.readline().split())

T_bundle=0

for i in lst:
    if i==0:
        continue
    elif i<=T:
        T_bundle+=1
    elif i%T==0:
        T_bundle+=i//T
    else:
        T_bundle+=i//T+1

P_bundle=N//P
pen=N%P

print(T_bundle)
print(f'{P_bundle} {pen}')