num = int(input())

while num != 0 : # True로 계속 두면 시간 초과 발생, 조건 걸어주기
    if 101 > num > 0 :
        print(num)
        num -= 1