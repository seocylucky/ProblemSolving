# 정수 1개 입력받아 분류하기

a = int(input())

if a < 0 :
    if a % 2 == 0 :
        print('A')
    if a < 0 :
        if a % 2 == 1 :
            print('B')
elif a > 0 :
    if a % 2 == 0 :
        print('C')
    if a > 0 :
        if a % 2 == 1 :
            print('D')
else :
    print('잘못 입력하셨습니다')