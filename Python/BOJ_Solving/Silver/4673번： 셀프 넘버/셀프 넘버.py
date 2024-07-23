def sumNum(number):
  return sum([int(i) for i in str(number)])

resultArr = []
constructorArr = []

for i in range(1, 10001) :
  resultArr.append(i)
  if 0 < i + sumNum(i) < 10001 :
    constructorArr.append(i + sumNum(i))

resultArr = [i for i in resultArr if i not in constructorArr]

for j in resultArr :
  print(j, end="\n")