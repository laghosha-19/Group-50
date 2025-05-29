//3)შექმენით სია სადაც გექნებათ ობიექტები , ამ ობიექტებში უნდა გქონდეთ სტუდენტის სახელი,გვარი და ქულები, ქულები უნდა იყოს სია , თქვენი დავალებაა გამოთვალოთ ქულების საშუალო შემდეგ გაფილტროთ მთავარი სია, ვისი საშუალო ქულაც იქნება მეტი ან ტოლი 90-ზე ისინი გადაიტანეთ გაფილტრულ სიაში , შემდეგ map()-ის საშუალებით გადაუარეთ გაფილტრულ სიას და დააბრუნეთ ახალ სიაში მხოლოდ სტუდენტის სახელები -->
const list6 = [
    {name1:"Luka", suranme:"lago", scores:[45,67,8,67,45]},
    {name1:"Luka", suranme:"lago", scores:[11,12,12,34,65]},
    {name1:"Luka", suranme:"lago", scores:[1,3,53,12,12]},
    {name1:"saba", suranme:"lago", scores:[4123,7423,8,7,45,55]},
    {name1:"gio", suranme:"lago", scores:[996,67,80,67,100,200]},
]
const avarege = scores => {
    let sum = 0
    let length20 = scores.length
    for (i of scores){
        sum += i
    }
    return sum / length20
}
const filtered20 = list6.filter(g => avarege(g.scores) >= 90)
const names2 = filtered20.map(g => g.name1) 
console.log(names2)

