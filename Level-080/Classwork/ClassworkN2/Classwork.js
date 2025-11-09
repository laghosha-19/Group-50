let photo = document.getElementById("imageN1")
photo.addEventListener("mouseover",nextimage)
photo.addEventListener("mouseout", backimage)
function backimage(){
    photo.src = `./Search.png`
}
function nextimage(){
    photo.src = `./verify.png`
}
