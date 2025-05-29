// 2) მომხმარებელს შემოატანინეთ თვის სახელი მაგ:("იანვარი" , "თებერვალი") , თქვენი მიზანია დაადგინოთ მომხმარებლის შემოტანილი თვე სეზონის რომელი პერიოდია (ზაფხული,ზამთარი,შემოდგომა,თუ გაზაფხული)

let month = prompt("enter month to see season")

switch(month){
    case "Jan":
    case "Feb":
    case "Dec":
        console.log("it's  winter");
        break
    case "June":
    case "July":
    case "Aug":
        console.log("it's summer");
        break
    case "Mar":
    case "apr":
    case "May":
        console.log("it's spring");
        break
    case "Sep":
    case "oct":
    case "Nov":
        console.log("it;s autumn");
        break
    default:
        console.log("your entered month name does't exist");
}



let score = 55
switch (true){  // აქ შეგვიძლია ჩავწეოთ 1 ან 0 ანუ true და false 
    case (score >= 50 && score <= 60):
        console.log("C");
        break
    default:
        console.log("You Failed, Sorry broski");
}
