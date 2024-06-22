a = int(input())
b = int(input())
c = int(input())

num = a*b*c

numList = list(map(int, str(num))) # 정수를 리스트로 변환

for i in range(0, 10, 1) :
    print(numList.count(i)) # 리스트의 요소 개수 구해줌 count()