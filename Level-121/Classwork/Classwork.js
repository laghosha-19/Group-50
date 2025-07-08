//  შექმენით OrderManager კლასი, რომელსაც ექნება: 
//  --- თვისებები --- 
// ◽ activeOrders: Map - ობიექტის შექმნისას ცარიელი მაპი
// ◽ completedOrders: Set - ობიექტის შექმნისას ცარიელი სეტი
// ❔ activeOrders მაპი შეინახავს აქტიურ შეკვეთებს სადაც key იქნება orderId: Number, ხოლო value იქნება customerName: String
// ❔ completedOrders სეტი კი იმ მომხმარებლების სახელებს შეინახავს, რომლების შეკვეთებიც შევასრულეთ.
//  --- მეთოდები --- 
// ◽ processOrder(orderId, customerName, callback) 
// ◽ printStatus()
// ❔ printStatus მეთოდი კონსოლზე ბეჭდავს ყველა აქტიურ შეკვეთას(activeOrders) და ყველა დასრულებულ შეკვეთას(completedOrders). გამოიყენეთ ლუპი ანდა დესტრუქცია
// ❔ processOrder მეთოდი ქმნის შეკვეთას(ამატებს activeOrdersში), კონსოლზე გამოაქვს შეტყობინება, რომ ახალი შეკვეთა მივიღეთ და 3 წამით ამუშავებს შეკვეთას (setTimeout)
// ❔ setTimeout ის შიგნით:
//     1)ამოშალეთ შეკვეთა activeOrdersდან და მომხმარებლის სახელი შეინახეთ completedOrders სეტში 
//     2)გამოიძახეთ callBack ფუნქცია(დააბეჭდინეთ, რომ ესა და ეს შეკვეთა შესრულდა)
//     3)გამოიძახეთ printStatus მეთოდი
// ❔ callBack(orderId) ფუნქცია შექმენით კლასის გარეთ და შემდეგი რამ დააბეჭდინეთ კონსოლზე: 'შეკვეთა #${orderId} დამთავრდა'
//  ამის შემდეგ შექმენით OrderManager კლასის ობიექტი და გააკეთეთ რამოდენიმე შეკვეთა განსხავებული id და სახელებით


const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault
    let Username = e.target.Username.value
    let FoodName = e.target.FoodName.value
    console.log(e.target.Username);
    order1.processOrder(,Username,FoodName,orderFinish)
})





class OrderManager {
    constructor(activeOrders, complectedOrders){
        this.activeOrders = activeOrders
        this.complectedOrders = complectedOrders
    }

    printStatus(){
        let arr = [...this.activeOrders]
        arr.map(item => {
            console.log(item[0],item[1]);
        })

        console.log("=>> Complected Orders =>>");
        
        console.log(...this.complectedOrders);
    }

    processOrder(orderId, custumerName, callback){
        this.activeOrders.set(orderId,custumerName)
        console.log("შეკვეთა მიღებულია, შეკვეთის დასამუავებლად საჭიროა 3 წამი");
        settimeout(() => {
            console.log(custumerName);
            this.complectedOrders.add(custumerName)
            this.activeOrders.delete(orderId)

            console.log("order is done");

            this.printStatus()
            
        }, 3000)
    }
}

const orderFinish = (orderId) => {
    console.log(`order #${orderId} id finished`);
    
}

const order1 = new OrderManager(new Map([1, "aleqsandre"], [2, "Giorgi"], [3, "Luka"]),new Set(["Nika", "ilia", "bebrski"]))

order1.printStatus()


