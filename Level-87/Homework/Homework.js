let button = document.querySelector("button")
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let score1 = document.getElementById("score1")
let score2 = document.getElementById("score2")
let h1 = document.getElementsByClassName("h1")

button.addEventListener("click", function(e){
    let counter1 = Math.floor(Math.random()*6)+1
    let counter2 = Math.floor(Math.random()*6)+1
    player1.src = `dice_${counter1}.png`
    player2.src = `dice_${counter2}.png`
    switch(true){
        case counter1 > counter2:

    }
})