let left = document.getElementsByClassName("left")[0];
let right = document.getElementsByClassName("right")[0];
let slide = document.getElementsByClassName("slide")[0];

left.addEventListener("click", fun1);
function fun1() {
    let paragraph = slide.querySelector(".specialp");
    if (paragraph) {
        slide.removeChild(paragraph)
    }
}

right.addEventListener("click", fun2)
function fun2() {
    let paragraphExists = slide.querySelector(".specialp")
    if (!paragraphExists) {
        let newParagraph = document.createElement("p")
        newParagraph.classList.add("specialp")
        newParagraph.innerHTML =`111`
        slide.appendChild(newParagraph)
    }
}
