import sys

strList = sys.stdin.readline().rstrip() 
bombStr = sys.stdin.readline().rstrip()
bombLen = len(bombStr)
checkSequence = []

for char in strList:
    checkSequence.append(char)

    if ''.join(checkSequence[-bombLen:]) == bombStr:
        del checkSequence[-bombLen:]

result = ''.join(checkSequence)
if result:
    print(result)
else:
    print("FRULA")
