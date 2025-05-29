//2)createElement-ის გამოყენებით შექმენით ერთი მშობელი div-ელემენტი, ეს div-ი ჩაამატეთ body-ში , შემდეგ ამ მშობელ div-ში ჩაამატეთ კიდევ ორი შვილი div-ი და განალაგეთ ვერტიკალურად ერთმანეთისგან თანაბარი დაშორებით ,  პირველი დივი იყოს წითელი მეორე იყოს მწვანე , ასევე დაუმატეთ სასურველი სტილები


let join = document.body
let div = document.createElement("div") 
join.appendChild(div)

let joinDiv = document.createElement("div")
let div2 = document.createElement("div")
div.appendChild(joinDiv)
div.appendChild(div2)

joinDiv.style.width = "200px"
joinDiv.style.height = "200px"
joinDiv.style.color = "Red"

div2.style.color = "Green"
div2.style.width = "200px"
div2.style.height = "200px"

div.style.justifyContent = "center"
div.style.alignItems = "center"
