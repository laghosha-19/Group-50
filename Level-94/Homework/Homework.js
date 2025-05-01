//1) შექმენით სია სადაც რენდომულად შეიტანთ რიცხვებს , შემდეგ დაწეეთ ფუნქცია რომელიც გადაუვლის თითოეულ ელემენტს სიაში და დააბრუნებს ახალ სიას სადაც იქნება მხოლოდ ლუწი რიცხვები , ასევე შექმენით იგივენაირი მეორე ფუნქცია კენტი რიცხვებისთვის

const myArr = [12,435,123,645,11,345,12,9876,34,234,456121,41556,2134,624,777,524,134]

const newArr = (e,i) =>{
    if (e / 2 == 0)
        console.log("your entered number is even");
    else{
        console.log("your entered number is odd");
        
    }
}
const newestArr = myArr.map(newArr)
console.log(newestArr);

