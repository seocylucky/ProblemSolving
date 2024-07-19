def solution(k, score):
    answer = []
    awardStack = []
    for i in score :
        awardStack.append(i)
        awardStack.sort(reverse=True)
        if(len(awardStack) > k) :
            awardStack.pop()
        answer.append(awardStack[-1])
    return answer