let button1 = document.getElementById("add-to-cart");
let cart = document.getElementById("cart-item");
let product = `<img src="pcN1.jpg" alt="Product Image">
        <button id="remove">remove</button>`
let remove = document.getElementById("remove");

button1.addEventListener('click', ()=>{
        cart.innerHTML += product;
});


remove.addEventListener('click', ()=>{
    product.remove()
});