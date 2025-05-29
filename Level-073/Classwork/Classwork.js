//შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა სია შემდეგ კი დაბეჭდეთ ამ სიის ჯამი
function sumArr (Arr){
    let sum = 0
    for (let element of arr){
        sum += element
    }
    return sum
}
console.log(sumArr([12,5,6,32,23,46,2,35,65]));
