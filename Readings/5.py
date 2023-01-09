# 9 Jan 2023
# Basics of Recursion ( a function calling itself)

# A recursion program to print something repeatedly
""" def abc(counter):
    if (counter > 0):
        print('hello')
        abc(counter-1)
    else:
        return

abc(5) """

# How is this working?
# 1st function call is abc(5) => 2nd function call is abc(5-1) => 3rd function call is abc(4-1) => 4th function call is abc(3-1) => 5th function call is abc(2-1) => 6th function call is abc(1-1)
# a call stack is created during recursion
# the final call stack will look something like [abc(5),abc(4),abc(3),abc(2),abc(1),abc(0)]
# first abc(0) pops out from the stack, followed by abc(1) ....


# Print 1 to N using recusrion
""" def counting(count, N):
    if count <= N:
        print(count, end=' ')
        counting(count + 1, N)
    else:
        return


N = int(input('Enter the number upto which you want perform counting from 1..'))
counting(1, N) """


# Sum of first N numbers
""" def sumOfN(count, N, sum):
    if count <= N:
        sum += count
        return sumOfN(count + 1, N, sum)
    else:
        return sum


N = int(input('Enter the number upto which you want perform sum from 1..'))
print(sumOfN(1, N, 0)) """


# Reverse an array
# arr = [1,2,3,4,5]
# reverseArr = [5,4,3,2,1]

""" def reverseArr(arr, start, end):
    if (start <= end):
        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        return reverseArr(arr, start + 1, end - 1)
    else:
        return arr

arr = [10, 20, 30]
reverseArr(arr, 0, len(arr)-1)
print(arr) """
