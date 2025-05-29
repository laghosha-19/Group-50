//3) შექმენით ობიექტი user , ამ ობიექტში შეინახე შესაბამისი key-ები , for in - ციკლის  გამოყენებით გადაუარე თითოეულ key-ს და გამოსახე console-ში
const user = {
    name1 : "Luka",
    surname: "Laghoshvili",
    age : 16,
    livingPlace : "Rustavi"
}
for ( let i in user){
    console.log(i,user[i])
}