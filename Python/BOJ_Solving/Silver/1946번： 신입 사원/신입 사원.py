import sys

T = int(sys.stdin.readline())
applicantList = []
result = []

for _ in range(T) :
  applicantNum = int(sys.stdin.readline())

  for _ in range(applicantNum) :
    applicantList.append(list(map(int, sys.stdin.readline().split(' '))))

  applicantList.sort(key=lambda x: x[0])
  count = 1
  min_score = applicantList[0][1]

  for i in range(1, applicantNum) :
    if applicantList[i][1] < min_score :
      count += 1
      min_score = applicantList[i][1]

  result.append(count)
  applicantList = []

for j in result :
  print(j, end="\n")