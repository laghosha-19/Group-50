const form = document.querySelector("form")

const defauldinfo = {
    email : "lago@gmail.com",
    password : 1234
}
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e.target.email.password);
    const email = e.target.email.value
    console.log(email);
    const pass = e.target.password.value
    console.log(pass);
    defauldinfo.email == email && defauldinfo.password ? alert("register succsesfully"):
    alert("email or password is incorrect")
} )
// _____________________________________________________________________________________

const arr = ["banana","apple","orange"]

let [b,a,o] = arr

console.log(b);


const info = { 
    email: "jksnfsokmf",
    pass: "1234"
}
const {email,pass} = info

console.log(email);
