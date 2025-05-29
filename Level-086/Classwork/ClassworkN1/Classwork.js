// 1)შექმენით ცვლადი month ამ ცვლადში მომხმარებელს უნდა შემოატანინოთ თვე ოღონდ რიცხვების საშუალებით(მაგ. 1=იანვარი , 2=თებერვალი , 3 = მარტი) , ამ რიცხვების მეშვეობით დაადგინეთ რომელი თვეა და გამოსახეთ კონსოლში, ამისთვის აუცილებლად გამოიყენეთ switch , იმ შემთხვევაში თუ მომხმარებელმა შემოიყვანა სხვა სიტყვა ან 12 ზე მეტი რიცხვი console-ში გამოიტანოს რომ "ასეთი თვე არ არსებობს"


let month = Number(prompt("Enter month with numbers"))

switch(month){
    case 1:
        console.log("it's Jan");
        break
    case 2:
        console.log("it's Feb");
        break
    case 3:
        console.log("it's Mar");
        break
    case 4:
        console.log("it's Apr");
        break
    case 5:
        console.log("it's May");
        break
    case 6:
        console.log("it's Jun");
        break
    case 7:
        console.log("it's Jul");
        break
    case 8:
        console.log("it's Aug");
        break
    case 9:
        console.log("it's Sep");
        break
    case 10:
        console.log("it's Oct");
        break
    case 11:
        console.log("it's Nov");
        break
    case 12:
        console.log("it's Dec");
        break
    default:
        console.log("your entered number does't equal to 1-12 ");
}