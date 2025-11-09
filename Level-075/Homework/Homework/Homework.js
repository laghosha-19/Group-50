//)შექმენით ობიექტი car , რომელსაც ექნება 5 key -  company(მწარმოებელი) , model , milage ,year , condition , ამ ობიექტში ასევე უნდა იყოს შენახული ფუნქცია , ამ ფუნქციას პარამეტრად ჰქონდეს condition ,და ამ ფუნქციაში შეამოწმეთ , რომ თუ condition-არის კარგი ან ცუდი დაბეჭდეთ შემდეგი ტექსტი car is in {condition} condition გამოიყენეთ format-ი

const car ={
    Comapany : "Mercedes",
    Model : "SL600",
    Millage : 20000,
    Year : 1959,
    carCondition(){
        return `car is in ${this.Condition} condition`
    }
}
// console.log(car);
// console.log(Condition);
console.log(car.carCondition);
console.log(`This car is ${car.Comapany} ${car.Model} it got ${car.Millage}km, this car has been crated in ${car.Year},car is in ${car.Condition} condition`);




