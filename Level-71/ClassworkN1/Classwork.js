//  1) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ კი დაითვალეთ ერთიდან მომხმარებლსი შემოტანილ რიცხვამდე მხოლოდ ლუწი რიცხვების ჯამი

let custumerNumber = Number(prompt("enter any number!"))

let sum = 0
for (var i = 0 ;i<= custumerNumber;i++){
    if(i%2==0){
        sum+=1
    }
}
console.log(sum);


// array 
let myArray = ["Luka", 16 , true, 2.3, ["M"]]
console.log(myArray[0 ]);


//append function in js name.push("Gela") 
let name = ["Luka","Maliamoo" ]
name.push("Gela")
console.log(name);



//pop deleting last element in list 
name.pop()




//sliciing ანაწევრებს სიას 
let name1 = ["Luka","Jondo","Levana","Zalatoi gela", "Nikoloz" , "svarchika " , "bebera" , "slice" , "foutht"]

console.log(name1.slice(2,5));


//reverce - reverceing list 
console.log(name1.reverse);


//delete - deleting thing in list



//spliceing - deleteing element form list (2,1)-meaning: delete from second element only 1 

console.log(name1.splice(2,1));





