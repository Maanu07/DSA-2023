# 4 Jan 2023
# Basic Math Logics

# 1. Armstrong Number
# Armstrong Numbers are the numbers having the sum of digits raised to power no. of digits is equal to a given number.
# Example =>  153

""" def isArmstrong(N):
    numberToStr = str(N)
    pow = len(numberToStr)
    sum = 0
    for i in numberToStr:
        sum += int(i) ** pow
    if (sum == N):
        return True
    else:
        return False

print(isArmstrong(153)) """


# Print all divisors of a given number
# O(sqrt(N))
# Explanation:  36 => 1 2 3 4 6 9 12 18 36 => here  6 * 6 = 36 , we will iterate till sqrt(N)
""" import math
N = int(input('Enter a number...'))
for i in range(1, math.floor(math.sqrt(N))+1):
    if (N % i == 0):
        print(i, end=" ")
    if (i != N // i):
        print(N // i, end=" ") """


# Check for prime number
""" import math
def isPrime(N):
    for i in range(2, math.floor(math.sqrt(N))):
        if (N % i == 0):
            return False
    return True


print(isPrime(121)) """
