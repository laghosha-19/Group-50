//map არის მეთოდი რმელსაც შეუძლია სიაშ გადაუაროს თითოეულ ელემენტს თითოეულ ელემენტზე მოახდინოს რაიმე მეთოდი და ის აბრინებს ახალ სიას და არ ცვლის ძველს 

// შეგვიძლია გამოვიყენოთ როგორც for loop - ციკლი

// const names = ["Giorgi","Goga", "Saba"]

// const sortNames = (element,index) => {
//     return `${index}: ${element}`
// } 

// const newArray = names.map(sortNames)

//3) შექმენით სია სადაც შეინახავთ რანდომ სახელებეს , map-ის გამოყენებით მიწვდით თითოეულ ელემენტს სიაში და დააბუნეთ ახალი განახლებული სია სადაც იქნება ყველა სახელი დიდი ასოებით დაწეილი

const Names = ["nika","Tamar","Giorgi","mariam","irakli","Ana","levan","Salome","Dato","Ketevan"]

const sortNames = e => {
    return e.toUpperCase()
}
const newArray = Names.map(sortNames)
console.log(newArray);
