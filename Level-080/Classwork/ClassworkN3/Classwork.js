// 3) გააკეთეთ ისეთივე ფუნქციონალი Javascript-ის მეშვეობით რაც გაკვეთილზე გავაკეთეთ, თუმცა ამჯერად მომხმარებელს პირველი Input-ის ველში შემოატანინეთ სიტყვა. მეორე ინფუთის ველში კი თავიდან გაამეორებინეთ თავდაპირველად შემოტანილი სიტყვა. იმ შემთხვევაში თუ შემოტანილი ორი მნიშვნელობა არ ემთხვევა ერთმანეთს, console-ში გამოიტანეთ "The values should be equal and not blank". ხოლო თუ ემთხვევა - "The operation was successful".
function function1() {
    let value1 = document.getElementById("pass")
    let value2 = document.getElementById("pass1")
    if (value1 == value2 && value1 != "" ){
        console.log("operation was sucsessful");
        
    }
    else {
        console.log("The values should be equal and not blank");
    }
}