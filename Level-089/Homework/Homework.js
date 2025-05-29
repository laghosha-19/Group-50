let cart = document.querySelector("carter")

let opener = document.querySelector("shopping")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")

let sd1 = document.getElementById("sd1")
let sd2 = document.getElementById("sd2")
let sd3 = document.getElementById("sd3")
let sd4 = document.getElementById("sd4")
let sd5 = document.getElementById("sd5")


btn1.addEventListener("click",function(){
    opener.innerHTML += `<div id="sd1" class="system-desc">
                <img src="./Images/system1.png" alt="photo of system 1">
                <p>I5 10400kf</p>
                <button id="btn1">Add to cart</button>
                <p><u>$1099</u></p>
            </div>`
})

cart.addEventListener("click", function(){
    opener.style.transform = "translateX(0)"
})
