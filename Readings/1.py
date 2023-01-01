# 1 Jan 2023 
# PYTHON BASICS 

# display output in python 
print('Happy New Year!')

# take user input in python 
year = int(input('Enter the year...'))
print(year,type(year))

# basic datatypes in python
# 1. Number => int,float,complex
# 2. str 
# 3. Sequence => list, tuple, range 
# 4. Mapping => dict 
# 5. bool 
# 6. set 

# tuple and list both stores items in a sequential order, the only difference is that tuple is immutable

# set is an unordered collection of unique items

# dictionary is an unordered collection of key-value pair 

# flow control in python using if else...

# in python we don't have switch case...

# create a range of values in python 
values = range(5)
for i in values:
  print(i,type(i))

# functions in python 
def twoNumberSum(a,b):
  return a + b 
result = twoNumberSum(5,6)
print(result)

# we can import libraries in python to utilise some pre-defined function in other libraries
import math 
print(math.pow(2,3))

# Python Keyword Argument
def joinTwoStrings(str1,str2):
  return str1 + ' ' + str2
print(joinTwoStrings(str2='Manas',str1='Joshi'))


# datatypes like whole numbers, string, tuples are immutable 
a = "first"
b = "first"

# Returns the actual location
# where the variable is stored
print(id(a))
print(id(b))
 
# Returns true if both the variables
# are stored in same location
print(a is b)