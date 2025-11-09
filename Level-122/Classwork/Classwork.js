const ol = document.querySelectorAll("ol")
const form = document.querySelector("form")

class OrderManager {
    constructor() {
        this.activeOrders = new Map(JSON.parse(localStorage.getItem("activeOrders"))) || new Map([])
        this.completedOrders = new Set()
    }

        processOrder(orderId, customerName, food, callback) {
        this.activeOrders.set(orderId, { customerName: customerName, food: food })
        console.log(this.activeOrders)
        localStorage.setItem("activeOrders", JSON.stringify([...this.activeOrders]))
    }
    render() {
        let html = ""
        console.log(this.activeOrders)
        for (const [id, nameNfood] of this.activeOrders) {
            console.log(id)
            console.log(nameNfood.customerName, nameNfood.food)
            html += `<li>${id}: ${nameNfood.customerName} ${nameNfood.food}</li>`
        }
        return html
    }
}
let callBack = (orderId) => {
    console.log(`შეკვეთა #${orderId} დამუშავდა`)
}
let customer = new OrderManager()
ol[0].innerHTML = customer.render()
let customerNumber = JSON.parse(localStorage.getItem("activeOrders")).length
console.log(customerNumber)
form.addEventListener("submit", (e) => {
    e.preventDefault()
    customerNumber++
    customer.processOrder(customerNumber, form.name.value, form.food.value, callBack)
    ol[0].innerHTML = customer.render()
})
let map = new Map([["colorOne", "Red"], ["colorTwo", "Yellow"], ["ColorThree", "Green"]])
console.log([...map.entries()])
