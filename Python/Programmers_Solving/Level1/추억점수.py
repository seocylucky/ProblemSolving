def solution(name, yearning, photo):
    answer = []
    for i in photo :
        sum = 0
        for j in i :
            if j in name :
                valueIndex = name.index(j);
                sum += yearning[valueIndex];
        answer.append(sum);
    return answer