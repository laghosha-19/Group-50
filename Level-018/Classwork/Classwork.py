# მომხმარებელს შეეკითხეთ სახელი სანამ ეს სახელი არიქნება გაბრიელი მაქამდე არ გაჩერდეს და შეეკითხოს ისევ ხელახლა თუ იქნება გაბრიელი გაჩერდეს
name = "Gabriel"

User_Guess = input("Enter name: ")
while User_Guess != name:
    User_Guess = input("Enter name: ")
print("You are right.", User_Guess == name)
