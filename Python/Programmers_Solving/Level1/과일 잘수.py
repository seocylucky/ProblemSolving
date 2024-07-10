def solution(k, m, score):
    answer = 0
    score.sort(reverse = True)
    scoreList = [ score[i:i+m] for i in range(0, len(score), m) if len(score[i:i+m]) == m]
    smallEachList = [min(j) for j in scoreList]
    for small in smallEachList :
        answer += small*m
    return answer