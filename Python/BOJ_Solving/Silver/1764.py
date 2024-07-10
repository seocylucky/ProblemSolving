import sys

n, m = sys.stdin.readline().split()
n = int(n)
m = int(m)

n_list = []
m_list = []

for i in range(n):
    n_list.append(sys.stdin.readline().strip("\n"))

for i in range(m):
    m_list.append(sys.stdin.readline().strip("\n"))

inter = list(set(n_list) & set(m_list))

inter.sort()

print(len(inter))

for i in inter :
    print(i)