strArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

inputPosition = list(input())
count = 0

xPosition = strArr.index(inputPosition[0]) + 1 # 문자 위치
yPosition = int(inputPosition[1]) # 숫자 위치

twoX = [-2, 2, -1, 1]
twoY = [-1, 1, -2, 2]

nowX, nowY = xPosition, yPosition;

for nx in range(len(twoX)):
  for ny in range(len(twoY)):
    if nx == ny:
      nowX = xPosition + twoX[nx]
      nowY = yPosition + twoY[ny]

      if 1 <= nowX <= 8 and 1 <= nowY <= 8:
        count += 1

print(count)