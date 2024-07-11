def solution(s, skip, index):
    answer = ''
    arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    filtered_arr = [char for char in arr if char not in skip]
    
    for char in s:
            current_index = filtered_arr.index(char)
            new_index = (current_index + index) % len(filtered_arr)
            answer += filtered_arr[new_index]
    return answer