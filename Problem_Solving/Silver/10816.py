import sys
from collections import Counter

n = int(sys.stdin.readline())
n_card = list(map(int, sys.stdin.readline().split()))

m = int(input())
m_card = list(map(int, sys.stdin.readline().split()))

dic = Counter(n_card)

for i in m_card :
    print(dic[i], end = " ")