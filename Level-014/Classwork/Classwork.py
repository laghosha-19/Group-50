# #1) ერთიდან 50 მდე დაბეჭდეთ რიცხვების საშუალო არითმეტიკული
# sum = 0 
# for i in range(1 , 50):
#     sum = sum + i
# print(sum / 50)


# # 2) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი მომხმარებლის შემოტანილ რიცვამდე დაბეჭდეთ ყველა ლუწი რიცხვი
# num1 = int(input("Enter number: "))

# for i in range (2 , num1 ,2):
#     print(i)


# 3) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი მომხარებლის შემოტანილ რიცხვამდე დაბეჭდეთ ყველა რიცხვის საშუალო არითმეტიკული 
num2= int(input("Enter number: "))
sum2 = 0
count = 0 
for i in range (0 , num2):
    sum2 = sum2 + i
    count = count + 1
    print(sum2 / count )
