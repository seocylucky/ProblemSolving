def solution(cards1, cards2, goal):
    answer = ''
    inCards1Count = 0
    inCards2Count = 0
    subGoal = []
    for i in range(0, len(goal)):
        if(goal[i] in cards1) :
            subGoal.append(cards1[inCards1Count])
            inCards1Count += 1
        else :
            subGoal.append(cards2[inCards2Count])
            inCards2Count += 1
    if (goal == subGoal) :
        answer = "Yes"
    else :
        answer = "No"
    return answer