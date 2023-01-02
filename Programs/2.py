# 2 Jan 2023
# Pattern Matching (this is helpful for building small logics)
# I can check "GFG" for pattern questions

# PATTERN 1
# *****
# *****
# *****
# *****
# *****
""" for i in range(5):
  for j in range(5):
    print('*',end='')
  print() """

# PATTERN 2
# *
# **
# ***
# ****
# *****
""" for i in range(1,6):
  for j in range(i):
    print('*',end='')
  print() """

# PATTERN 3
# 1
# 12
# 123
# 1234
# 12345
""" for i in range(1,6):
  for j in range(1,i+1):
    print(j,end='')
  print() """

# PATTERN 4
# *****
# ****
# ***
# **
# *
""" for i in range(5):
  for j in range(5-i):
    print('*',end='')
  print() """

""" for i in range(5,0,-1):
  for j in range(i):
    print('*',end='')
  print() """


# PATTERN 5
# 1
# 22
# 333
# 4444
# 55555
""" for i in range(1,6):
  for j in range(i):
    print(i,end='')
  print() """

# PATTERN 6
#     *
#    ***
#   *****
#  *******
# *********
""" N = 5   # pattern depends on the value of "N"
x = 1
y = N
for i in range(N):
    for j in range(1, y):
        print(' ', end='')
    for m in range(x):
        print('*', end='')
    print()
    x += 2
    y -= 1 """

# PATTERN 7
# *********
# *******
#  *****
#   ***
#    *
""" N = 5   # pattern depends on the value of "N"
x = N * 2 - 1
for i in range(N):
    for j in range(i):
        print(' ', end='')
    for m in range(x):
        print('*', end='')
    print()
    x -= 2 """
