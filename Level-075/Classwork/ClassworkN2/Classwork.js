//Prompით მომხმარებელს შემოატანინეთ მისი სახელი, გვარი, ასაკი და ჰობი, შემდეგ ეს ინფორმაცია შეინახეთ ობიექტში, ასევე ამ ობიექტს დაუმატეთ ფუნქცია, რომლის გამოძახებაზეც კონსოლში გამოიტანს "Welcome {name}"


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
obj.greet()
