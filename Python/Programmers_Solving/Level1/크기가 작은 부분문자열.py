def solution(t, p):
    answer = 0
    subStr = [t[i: i+len(p)] for i in range(0, len(t)-len(p)+1)]
    for j in subStr :
        if(int(j) <= int(p)) :
            answer += 1
    return answer