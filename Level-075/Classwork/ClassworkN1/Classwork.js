//შექმნილი ობიექტიდან გამოიტანეთ ყველა მნიშვნელობა ცალ-ცალკე და შემდეგ ობიექტს დაამატეთ თქვენი ჯგუფი
const myInfo =  {
    name1 : "Luka",
    surname : "Laghoshvili",
    age : 16,
    hobby : "Football"
}
console.log(myInfo.name1);
console.log(myInfo.surname);
console.log(myInfo.age);
console.log(myInfo.hobby);
myInfo.hobby = "basketball"
console.log(myInfo);



const GOA = {
    Group : 50 ,
    Level : 75,
    Subject : "JS",
    Lesson : true,
    levelsUntill100() {
        console.log(100 + this.Level);
    }
}
for (let i in Goa ){
    console.log(i,GOA[i]);
}
GOA.levelsUntill100()

// console.log(Object.keys(GOA));
// console.log(Object.values(GOA));
