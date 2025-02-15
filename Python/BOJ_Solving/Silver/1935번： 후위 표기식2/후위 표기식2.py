N = int(input())

alpas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y","Z"]
stack = []
alpasN = []

expression = input()

for i in range(N):
  alpasN.append(int(input()))

for i in expression:
  if i in alpas:
    stack.append(alpasN[alpas.index(i)])
  else :
    a = stack.pop()
    b = stack.pop()
    if i == "+":
      stack.append(a + b)
    elif i == "-":
      result = b - a
      stack.append(result)
    elif i == "*":
      stack.append(a * b)
    elif i == "/":
      stack.append(b / a)

print(format(stack[0], ".2f"))