# 4 Jan 2023 (missed the work on 3 Jan, so will be pushing the code 2 times today)
# Basic Math Logics

# 1. COUNT DIGITS  (Given a number N. Count the number of digits in N which evenly divides N.)
# Input:
# N = 12
# Output:
# 2
# Explanation:
# 1, 2 both divide 12 evenly

""" N = int(input('Enter any number'))
numberValInStr = str(N)
count = 0
for i in numberValInStr:
    if int(i) == 0:
        break
    elif (N % int(i) == 0):
        count += 1
print(count) """


# 2. Reverse a number
""" def reverseANumber(N):
    decToBin = '{:032b}'.format(N)  # decimal to 32 bit binary
    reverse = "".join(reversed(decToBin))  # reversing the 32 binary string
    return int(reverse, 2)  # converting the binary back to decimal

print(reverseANumber(5)) """


# 3. Check if a number is Palindrome or not
""" def isPalindrome(N):
    reverse = 0
    rem = 0
    original = N
    while (N % 10 != 0):
        rem = N % 10
        N = N//10
        reverse = 10 * reverse + rem
    if (reverse == original):
        return True
    else:
        return False


print(isPalindrome(0)) """


# 4. GCD or HCF of two numbers
""" def calculateGCD(a, b):
    ans = None
    for i in range(1, min(a, b)+1):
        if (a % i == 0 and b % i == 0):
            ans = i
    return ans


print(calculateGCD(3, 10)) """
# try using second method which is using recursion
