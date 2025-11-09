
// paragraph[0].innerHTML = "Hello Luka"
// paragraph[0].style.color = "green"


//1)შექმენით რამდენიმე თეგი HTML-ში და javascript-ის გამოყენებით მიეცით სასურველი სტილები და შეუცვალეთ კონტენტი
let paragraph = document.getElementsByTagName("p")
let header = document.getElementsByTagName("header")
paragraph[0].innerHTML = "Hello Giorgi"
paragraph[1].style.color = "Red"
header[0].style.color = "Blue"

let p = document.getElementsByClassName("par")

p[0].innerHTML = "paragraph"

let header3 = document.getElementsByTagName("h3")
function changeName(){
    h3[0].innerHTML = "gggggggg"
}