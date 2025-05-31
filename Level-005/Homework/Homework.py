#6) მომხმარებელს input ის საშუალებით შემოატანინეთ სახელი შემდეგ კი პროგრამა მას მიესალმოს 

name = input("Enter your name: ")
print("Hello", name)


#7) მომხმარებელს შემოატანინეთ სახელი შემდეგ გვარი და ტერმინალში დაბეჭდეთ მისი სრული სახელი და გვარი მოახდინეთ მათი კონკატინაცია 
name = input("Enter your name: ")
lastname = input("Enter your lastname: ")

print(name , lastname)



# 8) მომხმარებელს შეეკითხეთ სახელი, გვარი, ასაკი, საცხოვრებელი,ჰობი შემდეგ კი დაბეჭდეთ გრძელი წინადადება მაგ. შენი სახელია "სახელი და გვარი" შენი ასაკია "ასაკი" და ასე შემდეგ

name = input("Enter name: ")
lastname = input("Enter lastname: ")

age = int(input("Enter your age"))
living_place = input("Where are you living")
hobby = input("Your hobby")

print ("Your name is " + name + "your surname is" +  lastname + "your age is " + age + "you are living in" + living_place + "your hobby is " + hobby)


#9) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი დაბეჭდეთ მომხმარებლის რიცხვს დამატებული 5
num1 = int(input("Enter any number: "))

print(num1 + 5)

#  10) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი დაბეჭდეთ ამ რიცხვის კვადრატი
num1 = int(input("Enter number "))

print(num1 ** 2)


#11) მომხმარებელს შემოატანინეთ ორი რიცხვი შემდეგ კი ამ ორი რიცხვისგან შეადგინეთ ოთხი მათემატიკური მოქმედება, დამატება გამოკლება გამრავლება და გაყოფა

num1 = int(input("Enter number "))
num2 = int(input("Enter number "))


print(num1 + num2 )
print(num1 - num2 )
print(num1 / num2 )
print(num1 * num2 )


#12) მომხმარებელს შეეკითხეთ მისი ასაკი შემდეგ კი დაბეჭდეთ 10 წლის შემდეგ რამდენი წლის იქნება

age = int(input("Enter your age: "))

print(age + 10)

