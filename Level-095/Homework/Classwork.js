
//<!-- 1)შექმენით სია სადაც გექნებათ რენდომ რიცხვები , შემდეგ გაფილტრეთ ეს სია და დაამატეთ ახალ სიაში მხოლოდ ის ელემენტები რომლებიც იქნებიან კენტ ინდექსზე და მათი მნიშვნელობაც იქნება კენტი

const list1 = [1,233,456,5245,1324,7,6345,123,462,2456,13452456,7,65,4,56]

const filteredNums = list1.filter((num,i) => i % 2 == 1 && num % 2 == 1)
console.log(filteredNums);



// const list5 = [234,1345,123452546,2345,1235,125436]
// let sum = 0
// for (i in list5){
//     sum += i
// }
// let length1 = list5.length()
// console.log(sum / length1);

