import sys

N = int(sys.stdin.readline().strip())
cnt = 0

for _ in range(N):
    word = sys.stdin.readline().strip() 
    is_group_word = True
    alpha_dict = {}
    
    for idx, char in enumerate(word):
        if char in alpha_dict:
            if alpha_dict[char] != idx - 1:
                is_group_word = False
                break
        alpha_dict[char] = idx
    
    if is_group_word:
        cnt += 1

print(cnt)
