#정수 3개 입력받아 합과 평균 출력하기

a, b, c = input().split()
a = int(a)
b = int(b)
c = int(c)
print(a+b+c, format((a+b+c)/3, '.2f'))
