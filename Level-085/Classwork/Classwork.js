let audios = ["./Audios/crash.mp3",
    "./Audios/kick-bass.mp3", 
    "./Audios/snare.mp3", 
    "./Audios/tom-1.mp3", 
    "./Audios/tom-2.mp3", 
    "./Audios/tom-3.mp3", 
    "./Audios/tom-4.mp3"]

let instruments = document.querySelectorAll(".img-cont")
let sound = document.querySelectorAll("audio")

document.addEventListener("keydown", function (e) {
    if (e.key == "w") {
        let idk = new Audio(audios[0])
        idk.play()
        instruments[0].style.border = "10px solid #fff"
    }
    else if (e.key == "a") {
        let idk = new Audio(audios[1])
        idk.play()
        instruments[1].style.border = "10px solid #fff"
    }
    else if (e.key == "s") {
        let idk = new Audio(audios[2])
        idk.play()
        instruments[2].style.border = "10px solid #fff"
    }
    else if (e.key == "d") {
        let idk = new Audio(audios[3])
        idk.play()
        instruments[3].style.border = "10px solid #fff"
    }
    else if (e.key == "j") {
        let idk = new Audio(audios[4])
        idk.play()
        instruments[4].style.border = "10px solid #fff"
    }
    else if (e.key == "k") {
        let idk = new Audio(audios[5])
        idk.play()
        instruments[5].style.border = "10px solid #fff"
    }
    else if (e.key == "l") {
        let idk = new Audio(audios[6])
        idk.play()
        instruments[6].style.border = "10px solid #fff"
    }
})