let hexColor = '0123456789abcdef'
let resultColor = '#'


let main = document.querySelector("main")[0]
let clickButton = document.getElementsById('button')
let Color = document.getElementById('color')

for (let num = 0; num < 6; num++){
    let randomIndex = Math.floor(Math.random()*16);
    resultColor = resultColor + hexColor[randomIndex]
}
// console.log("#" + resultColor);
Color.textContent = resultColor
Color.style.color = resultColor


main.style.backGroundColor = resultColor
resultColor = '#'

























const btn = document.getElementsByClassName("btn")

function buttonClickFunc(){
    console.log("click");
}

btn.addEventListener("click",buttonClickFunc)


// annonymus function - cus it got no name 
btn.addEventListener("click", function(){
    console.log("click");
    
})
