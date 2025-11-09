//2)შექმენით სია სადაც გექნებათ 5 ობიექტი , ამ ობიექტებში შეინახავთ მომხმარებლის სახელს და ასაკს , თქვენი დავალებაა გაფილტროთ ეს სია და დატობოთ მხოლოდ იმ მომხმარებლის ობიექტები ვისი ასაკიც მეტი ან ტოლი იქნება 18 ზე
const list2 = [
    {name:"Luka",age:19},
    {name:"Gio",age:20},
    {name:"saba",age:12},
    {name:"lazare",age:11},
    {name:"guga",age:22},
]
const filtered = list2.filter(i => i.age >= 18)
console.log(filtered)
