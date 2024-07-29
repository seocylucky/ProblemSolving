meetingCnt = int(input())
meetingTime = []
result = 0

for i in range(meetingCnt):
    start, end = map(int, input().split())
    meetingTime.append((start, end))

meetingTime = sorted(meetingTime, key=lambda x: (x[1],x[0]))

endTime = 0

for i in range(meetingCnt):
    if meetingTime[i][0] >= endTime:
        endTime = meetingTime[i][1]
        result += 1

print(result)