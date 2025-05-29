#1) შექმენით ერთი სია რომელშიც შეიტანთ სახელებს შემდეგ შექვადასხვამენით მეორე სია რომელშიც იქნება ისევ სხ სახელები გააერთიანეთ ეს ორი სია ჩაამატეთ 5 ინდექსზე ახალი სახელი დაითვალეთ გაერთიანებული სიის სიგრძე და დაითვალეთ თქვენი სახელი რამდენჯერ გვხვდება ამ სიაში, ასევე დაბეჭდეთ რომელ ინდექსზე დგას თქვენი სახელი
name = ["Luka" , "Mari", "Nika ", "Gio ", "Davit", "Nikoloz", "Ana",]
name1 = ["Vano" ,"Sandro" ,"Aleqsi" ,"Tamari" ,"Lizi", "Gocha", "Zuka"]
name2 = []

for i in name:
    name2.append(i)
for i in name1:
    name2.append(i)
print(name2)

name2.insert(5,"Ilia")
print(name2)


print (len(name2))

print (name2.count("Luka"))

print(name2.index ("Luka"))
