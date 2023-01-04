# 4 Jan 2023 (missed the work on 3 Jan, so will be pushing the code 2 times today)
# Python Lessons

# 1. Python is a type-inferred language i.e it automatically detects the type of variable
num = 100  # here you don't need to tell python that var "num" is of type Number, it automatically detects it

# 2. literals are fixed values in python like number, string, boolean, character, None..
# 3. we can have collection of literals in python like list, set, tuple, dictionary...

# 4. Type Conversion/casting => converting data of one type to another
# Two type of conversions => 1. implicit conversion(python does automatically) 2. manual/explicit conversion
# In type casting there can be some loss of data as we are enforcing the object to a specific data type
# Example =>  str to int or vice versa
a = 100
aInStrValue = str(a)
b = '10'
bInNumberValue = int(b)
print(a, type(aInStrValue), b, type(bInNumberValue))

# 5. We can format our output using str.format(), here {} are used as placeholders
print('Hey, I am {} and I am {} year old.'.format('Manas', 22))
