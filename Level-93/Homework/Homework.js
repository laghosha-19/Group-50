const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

const title = document.getElementById("title")
const content = document.getElementById("content")

const body = document.body

function update(){
    const currentTime = new Date()
    const newYearDate = new Date('January 01 2026 00:00:00')
    let interval = newYearDate - currentTime
    let daysInterval = Math.floor(interval / (1000*60 *60 * 24))
    let hoursInterval = Math.floor(interval / (1000 * 60 *60) % 24)
    let minutesInterval = Math.floor(interval / (1000 * 60) % 60)
    let secondsInterval = Math.floor(interval / (1000) % 60)

    if (interval <= 0){
        clearInterval(functionInterval)
        title.textContent = "Happy New Year"
        body.style.backgroundimage = "url(./images/12-59-04-399__340.webp)"
        content.style.backDropFilter = "blur(0px)"
        content.style.boxShadow = "0px 0px 0px 0px"
        let sound = new Audio("./images/sound.mp3")
        sound.play()
    }
    
    if (hoursInterval < 10){
        hours.textContent = `0` + String(hoursInterval)
    }
    else{
        hours.textContent = String(hoursInterval)
    }
    if (minutesInterval < 10){
        minutes.textContent = `0` + String(minutesInterval)
    }
    else{
        minutes.textContent = String(minutesInterval)
    }
    if(secondsInterval < 10){
        seconds.textContent = `0` + secondsInterval
    }
    else{
        seconds.textContent = `0` + secondsInterval
    }
    days.textContent = String(daysInterval)
    hours.textContent = String(hoursInterval)
    minutes.textContent = String(minutesInterval)
    seconds.textContent = String(secondsInterval)
    console.log(hoursInterval);
}
const intervalTime = setInterval(update, 1000)

