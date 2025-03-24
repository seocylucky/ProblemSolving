from itertools import combinations

n = int(input())
ingredients = []

for _ in range(n):
  sour, bit = map(int, input().split())
  ingredients.append([sour, bit])

for i in ingredients:
    result = min(result, abs(i[0]-i[1]))
    
for i in range(1, n):
  combinationList = list(combinations(ingredients, i+1))

  for j in combinationList:
    sourResult = 1
    bitResult = 0

    for k in j:
      sourResult *= k[0]
      bitResult += k[1]
    
    result = min(result, abs(sourResult - bitResult))

print(result)