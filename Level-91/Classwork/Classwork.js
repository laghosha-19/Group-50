let nameArr = ["bmw", "mercedes", "audi", "dodge", "toyota" ,"nissan", "zaparojeci", "niva", "lambo", "mnclaren", "prische", "ford","opel", ""]

let list = document.getElementById("list")
let btn = document.getAnimations("btn")

function updater (){
    list.innerHTML = ""

    for (let i =0; i < nameArr.length; i ++ ){
        let li = document.createElement("li")
        li.innerHTML = "delete"
        button.id = i
        li.appendChild(button)
        list.appendChild(li)
        }
    }

updater()
btn.addEventListener("click",function(){
    nameArr.pop()
    console.log(nameArr);
})

const removeBtns = document.getElementsByClassName("remove")
for (i=0; i < removeBtns.length; i ++){
    removeBtns[i].addEventListener("click",function(e){
        let index = Number(nameArr[index])
    })
}