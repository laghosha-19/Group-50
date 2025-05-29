    let time = document.querySelector(".time")

    let same = document.querySelectorAll(".same")

    let clock = document.querySelector("#clock")

    let rate = document.querySelector("#rate")

    let TimeBut = document.querySelector("#TimeBut")

    let HeartBut = document.querySelector("#HeartBut")

    let login = document.querySelector(".fa-solid")

    let address = ["images/black.png","images/red.png","images/purple.png","images/blue.png"]

    for (let i = 0; i < same.length;i++){
        same[i].addEventListener("click", () => {
            clock.src = address[i]
        })
    }
setInterval(() => {
    let date = new Date()

    let hour = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()

    seconds = seconds < 10 ? `0${seconds}` : seconds

    minute = minute < 10 ? `0${minute}` : minute

    hour = hour < 10 ? `0${hour}` : hour

    time.textContent = `${hour}:${minute}:${seconds}`
}, 1000)

HeartBut.addEventListener("click", () => {
    time.style.display = "none"
    rate.style.display = "flex"
})

TimeBut.addEventListener("click", () => {
    rate.style.display = "none"
    time.style.display = "flex"
})

login.addEventListener("click", () => {
    
})