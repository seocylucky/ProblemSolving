def solution(record):
    answer = []
    dict = {}
    
    # 닉네임 일괄 업데이트
    for r in record:
        words = r.split()
        if len(words) == 2:
            action, uid = words[0], words[1]
        else:
            action, uid, name = words[0], words[1], words[2]
        
        if action == "Enter" or action == "Change":
            dict[uid] = name
    
    # Enter와 Leave일 때 result로 출력
    for r in record:
        words = r.split()
        uid = words[1]
        if words[0] == "Enter":
            answer.append(dict[uid] + "님이 들어왔습니다.")
        elif words[0] == "Leave":
            answer.append(dict[uid] + "님이 나갔습니다.")
        
    return answer