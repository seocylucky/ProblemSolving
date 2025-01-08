N = int(input())
weights = []
twoMaxWeights = []
maxNum = 0

for i in range(N):
  weights.append(int(input()))

weights.sort(reverse=True)

maxWeight = max(weights[i] * (i +1) for i in range(N))

print(maxWeight)
