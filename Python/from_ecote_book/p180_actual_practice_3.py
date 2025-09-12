# 학생 수 입력
n = int(input())
scores = []

# 학생 이름 - 학생 성적 입력(딕셔너리로)
for i in range(n):
  scores.append(input().split(' '))

scores = dict(scores)

for i in scores.keys():
    scores[i] = int(scores[i])

# sorted 첫번째 인자는 items로 리스트화 시키기
scores = sorted(scores.items(), key=lambda x: x[1])

for students in scores:
    print(students[0], end=' ')