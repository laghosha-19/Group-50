# 1) დაბეჭდეთ 1 დან 50 მდე რიცხვები while loop ის გამოყენებით
num1 = 1
while num1 < 50:
    print(num1)
    num1 += 1
print("End of the 1st work")

#2) დაბეჭდეთ 1 დან 50 მდე მხოლოდ ლუწი რიცხვები if else ის გამოყენების გარეშე
num1 = 2
while num1 < 50:
    print(num1)
    num1 += 2
print("End of the 2nd work")

#3) დაბეჭდეთ 1 დან 50 მდე მხოლოდ კენტი რიცხვები if else ის გამოყენების გარეშე
num1 = 1
while num1 < 50:
    print(num1)
    num1 += 2
print("End of the 3rd work")

# 4) დაბეჭდეთ 10 დან 20მდე რიცხვები while loop ის გამოყენებით
num1 = 10
while num1 < 20:
    print(num1)
    num1 += 1
print("End of the 4th work")


# 5) დაბეჭდეთ 5 დან 30 მდე ყველა ლუწი რიცხვი while loop ის და if else გამოყენებით
num1 = 6
while num1 < 30:
    if num1 % 2 == 0:
        print(num1)
    num1 += 2
print("End of the 5th work")


#  6) დაბეჭდეთ 10 დან 35 მდე ყველა კენტი რიცხვი while loop ის და if else გამოყენებით
num1 = 10
while num1 < 35:
    if num1 % 3 == 0:
        print(num1 )
    num1 += 1
print("End of the 6th work")


# 7) დაბეჭდეთ 100 დან 200 მდე ყველა რიცხვი გვერძე კი მიუწერეთ ლუწია თუ კენტი გამოიყენეთ while loop და if else

num1 = 100
num2 = 100
while num1 < 200:
    if num1 % 2 == 0:
        print(num1, "Even")
    num1 += 1
else: 
    num1 % 3 == 0
    print(num1 , "Odd")
    num1 += 3


