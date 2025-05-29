#1) მომხმარებელს შეეკითხეთ ორი რიცხვი შემდეგ კი შექმენით ფუნქცია რომელსაც არგუმენტად გადასცემთ ამ ორ რიცხვს ხოლო ფუნქცია დააბრუნებს ამ ორი რიცხვის ჯამს, ასევე გააკეთე ასეთი 4 ფუნქცია სხვადასხვა მათემატიკური მოქმედებებისთვის, გამოიყენეთ პარამეტრები და არგუმენტად გადაეცით მომხარებლის შემოტანილი რიცხვები
num = int(input("Enter number!" ))
num1 = int(input("Enter number! "))

def inte(num,num1):
    print(num + num1)
inte(num,num1)

def inte(num,num1):
    print(num / num1)
inte(num,num1)

def inte(num,num1):
    print(num * num1)
inte(num,num1)

def inte(num,num1):
    print(num - num1)
inte(num,num1)

#2)  შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვებით სავსე სია ამ ფუნქციამ კი უნდა დააბრუნოს ამ სიის რიცხვების ჯამი


def stri(num3):
    return sum (num3)
print(stri([1,2,3,4,5,1,12,4,24,53,536,]))

#3) შექმენით ფუნქცია რომელსაც გადაეცემა არგუმენტად რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ლუწია ეს რიცხვი თუ კენტი
def stri1(num4):
    if num4 % 2 == 0:
        return "This number is even"
    else:
        return "This number is odd"
print(stri1([2]))

#4) შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვი შემდეგ კი მან უნდა დაგვიბრუნოს ეს რიცხვი დადებითია თუ უარყოფითი
def stri2(num5):
    if num5 >= 0:
        return "This number is positive"
    else:
        return "This number is negative"
print(stri2)

#5) შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა რიცხვი შემდეგ კი ფუნქციამ უნდა დაგვიბრუნოს მისი საპირისპირო რიცხვი 

def stri3 (num6):
    return num6* -1
print(stri3 ([7]))




