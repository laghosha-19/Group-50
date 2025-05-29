//2)არსებულ car ობიექტს , ობიექტის გარედან დაამატეთ color  და price  , ასევე ამოშალეთ milage , შემდეგ ყველაფერი გამოსახეთ console-ში 
const car ={
    Comapany : "Mercedes",
    Model : "SL600",
    Millage : 20000,
    Year : 1959,
    Condition : "Perfect"
}
const colorPrice = {
    color : "White",
    price : "$200000"
}
delete car.Millage
car.color = "White"
car.price = 200000
console.log(car);
