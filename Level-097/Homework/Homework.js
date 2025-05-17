    let time = document.querySelector(".time")
    let same = document.querySelectorAll(".same")
    let clock = document.querySelector("#clock")


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