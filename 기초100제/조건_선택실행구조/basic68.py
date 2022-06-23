# 점수 입력받아 평가 출력하기

score = int(input())

if 90 <= score <= 100 :
    print('A')
elif 70 <= score <= 89 :
    print('B')
elif 40 <= score <= 69 :
    print('C')
elif 0 <= score <= 39 :
    print('D')