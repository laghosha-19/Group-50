#დაბეჭდე რიცხვები 1-დან 10-მდე:
for i in range (1, 10):
    print(i)

#დაბეჭდე ლუწი რიცხვები 2-დან 20-მდე:
for i in range (2 , 20 ,2):
    print(i)

#დაითვალე 1-დან 50-მდე რიცხვების ჯამი:

num1 = 0

for i in range(1 , 50):
    num1 += i
print(num1)


#დაბეჭდე 1-დან 10-მდე რიცხვების კვადრატები
for i in range(1, 10):
    print(i ** i)

#1-დან 100-მდე ლუწი რიცხვების ჯამი
num2 = 0

for i in range(1, 100):
    if i % 2 == 0:
        num2 += i
    print(num2)

#დაბეჭდე 1-დან 30-მდე რიცხვები, რომლებიც იყოფა 3-ზე:
num3 = 0 

for i in range(1, 30):
    if i % 3 == 0:
        num3 += i
    print(num3)

#გააკეთე უკუთვლა 5-დან 1-მდე:
for i in range (5 , 1 ,-1):
    print(i)


#დაითვალე რიცხვების კუბების ჯამი  1-დან 50-მდე:

num4 = 0

for i in range(1, 50):
    num4 += i ** 3
print(num4)


#დაბეჭდე რიცხვები 1-დან 30-მდე, რომლებიც იყოფა 4-ზე:

num5 = []

for i in range(1 , 30):
    if i % 4 == 0:
        num5.append(i)
print(num5)

