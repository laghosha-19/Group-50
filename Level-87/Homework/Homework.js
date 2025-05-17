let button = document.querySelector("button")
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let score1 = document.getElementById("score1")
let score2 = document.getElementById("score2")
let h1 = document.getElementsByClassName("h1")

let body = document.body
body.innerHTML("div")

let audio = new Audio ("dice mp3.mp3")
let count1 = 0
let count2 = 0
button.addEventListener("click", function(){
    let counter1 = Math.floor(Math.random()*6)+1
    let counter2 = Math.floor(Math.random()*6)+1

    setTimeout(function(){
        player1.src = `dice_${counter1}.png`
        player2.src = `dice_${counter2}.png`
        switch(true){
            case counter1 > counter2:
                h1.textContent = "PLAYER 1 WIN"
                count1 ++
                break
            case counter1 < counter2:
                h1.textContent = "PLAYER 2 WIN"
                count1 ++
                break
            default:
                h1.textContent = "DRAW"
            }
            score1.textContent = count1
            score2.textContent = count2
    
        },1000)

        if (count1 == 10){

        }
    audio.play()
})