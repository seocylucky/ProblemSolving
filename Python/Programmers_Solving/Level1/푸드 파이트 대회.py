def solution(food):
    answer = ''
    subAnswer = ''
    for i in range(1, len(food)) :
        eatingCount = food[i] // 2;
        if(eatingCount > 0):
            answer += str(i) * eatingCount
            subAnswer += str(i) * eatingCount
    answer += '0'
    answer += ''.join(reversed(subAnswer))
    return answer