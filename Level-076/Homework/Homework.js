let counter = 0

let btn = document.querySelector("button")
let p = document.querySelector("p")


btn.addEventListener("click", function(){
    counter += 1 
    p.innerHTML = counter
})