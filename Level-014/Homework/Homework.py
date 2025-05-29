#For loop 0-იდან 20-ის ჩათვლით დაპრინტეთ ყველა მთელი რიცხვი
for i in range( 0 , 20):
    print(i)

#დაპრინტეთ პირველი 10 ნატურალური რიცხვი 
for i in range (0, 10):
    print(i)


#დაპტინტეთ 0-იდან 100-ის ჩათვლით ლუწი რიცხვები
for i in range (0, 100 ,2):
    print(i)

#Write a program that calculates and prints the sum of numbers from 1 to 10 using a for loop.
sum1 = 0
for i in range (0, 10):
    print(i + sum1)


#Print the squares of numbers from 1 to 15.
for i in range(1, 15):
    print(i ** 2)



#Write a program that calculates and prints the sum of squares of numbers from 1 to 5 using a for loop.

s = 0
for i in range(1 , 5):
    square = i ** 2
    s += square
print(s)


#Print numbers divisible by both 3 and 5 from 1 to 100 inclusive.
sum2 = []
for i in range (1, 100):
    if i % 3 == 0 and i % 5 == 0:
        sum2.append(i)
print(sum2)





#Write a program that prints numbers from 10 to 1 in reverse order using a for loop 
for i in range(10 ,1 , -1):
    print(i)




#შემოატანინეთ მომხმარებელს მისი ასაკი თუ მისი ასაკი 18 წელზე მეტია დაუპრინტეთ “you are adult” თუ 18 წელზე ნაკლები “you are virgin”
num1 = int(input("Enter your age: "))
if num1 >= 18:
    print("You are adult! ")
else:
    print("You are virgin! ")

#დაწერეთ ისეთი პროგრამა რომელიც მომხმარებელს უპრინტავს კვირის დღეს მომხმარებლის შემოტანილი რიცხვის მიხედვით (1 არის ორშაბათი, 2 სამშაბათი და ა.შ) გამოიყენეთ if elif else

num1 = int(input("Enter number: "))
#Monday
if num1 == 1:
    print("Monday")
#Tuesday
elif num1 == 2:
    print("Tuesday")
#Wednsday
elif num1 == 3:
    print("Wednsday")
#Thursday
elif num1 == 4:
    print("Thursday")
#Friday
elif num1 == 5:
    print("Friday")
#Saturday
elif num1 == 6:
    print("Saturday")
#Sunday
elif num1 == 7:
    print("Sunday")
else:
    print("Error")


