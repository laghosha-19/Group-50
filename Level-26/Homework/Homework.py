#1)შექმენით პროგრამა რომელიც გამოითვლის ჯგუფის საშუალო ასაკს. ასევე გამოითვალეთ ყველაზე ხშირად რომელი ასაკი გვხვდება
age = [15,15,16,16,16,16,16,16,15,17,17,17,17,19,21,21,23,25,25,26,32]

print(sum(age)/len(age))

from collections import Counter


counter = Counter(age)
most_common = counter.most_common(1)
print(most_common)


#2)  შექმენით პროგრამა რომელიც დაითვლის სიაში რამდენჯერ მეორდება თქვენი სახელი არ გამოიყენოთ count ფუნქცია 
l1 = ["Luka" , 1,1,1,1,2,3,4,5,6,7,8,12]
li = 1
count = 0
for i in l1:
    if li == i: 
        count += 1
print(count)


#3)  შექმენით პროგრამა რომელიც დაითვლის სიაში რამდენჯერ მეორდება თქვენი სახელი გამოიყენეთ count ფუნქცია
lst = [1,2,3,4,5,6,7,7,7]
print(lst.count(7))

#4) შექმენით სია რომელშიც იქნება რენდომ რიცხვები მოთავსებული შემდეგ კი შექმენით მეორე სია რომელშიც გადაიტანთ პირველი სიიდან მხოლოდ ლუწ რიცხვებს
lst1 = [1,2,4,5,6,7,8,9,1,11,12,15,16,14,22,24]
lst2 = []

for i in lst1:
    if i % 2 == 0:
        lst2.append(i)
print(lst2)


#5) შექმენით სია რომელშიც იქნება მოთავსებული რენდომ რიცხვები შემდეგ კი ამ სიიდან ამოშალეთ ყველა ლუწი რიცხვი
lst3 = [1,2,3,4,5,6,7,8,9,10]

for x in lst3:
    if x % 2 == 0:
        lst3.remove(x)
print(lst3)

#6) შექმენით სია რომელშიც იქნება სახელები შემდეგ კი შექმენით პროგრამა რომელიც ამოშლის ყველა სახელს რომელიც "t" ასოზე იწყება და ჩაამატებს ახალ სიაში
lst4 = ["Luka", "Tamari" ,"Taso", "Gio", "Zuka" ,"Zura"]
lst5 = []

for i in lst4[:]:
    if i[0] == "T":
        lst4.remove(i)
        lst5.append(i)
        continue
print(lst5)

