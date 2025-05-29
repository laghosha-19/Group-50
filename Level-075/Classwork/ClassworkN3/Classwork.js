//შექმნილი ობიექტებიდან გამოიტანეთ მხოლოდ Keyები შემდეგ კი მხოლოდ Valueები
const name1 = prompt("Enter your name here: ")
const surname = prompt("Enter your surnme here: ")
const age = Number(prompt("Enter your age here: "))
const hobb = prompt("Enter your hobby here: ")
const obj = {
    name1,
    surname,
    age,
    hobb,
    greet() {
        console.log("Welcome " + this.name1);
    }
}
console.log(obj);


console.log(Object.keys(obj));
console.log(Object.values(obj));
