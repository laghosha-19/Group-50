//2) მომხმარებელს შემოატანინეთ რიცხვი, შემდეგ შემოატანინეთ არჩევანი(ერთიდან მომხმარებლის რიცხვამდე დაბეჭდოს ლუწი, კენტი, კვადრატი ან 3 ის ჯერადი რიცხვი


var custumerNumber = Number(prompt("Enter Number"))
var custumerChoice = prompt("Enter choice:")

var i = 1 
while(i < custumerNumber){
    if (i % 2 == 0 && custumerChoice == "ლუწი"){
        console.log(i);
    }else if (i% 2 == 1 && custumerChoice == "კენტი"){
        console.log(i);
    }else if (custumerChoice == "კვადრატი"){
        console.log(i ** 2);
    }else if (i % 3 == 0 && custumerChoice == "სამის ჯერადი")
        console.log(i);
}