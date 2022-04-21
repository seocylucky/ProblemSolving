#"연도.월.일"을 입력받아 "일-월-연도" 순서로 바꿔 출력해보자.

a, b, c = input().split('.')
print(c, b, a, sep='-')
