const cart = document.querySelector(".cart");
let cart_data = [];

fetch('/api/cart')
  .then(response => response.json())
  .then(data => {
    cart_data = data;
    rendercart();
  })
  .catch(error => console.error('Error loading cart data:', error));

function removeItem(productName, element) {
    fetch('/api/cart/remove', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: productName })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Removed:', productName);
        element.remove();
    })
    .catch(error => console.error('Error removing item:', error));
}

function rendercart() {
  cart_data.forEach(function(element){
    let div_main =document.createElement("div");
    div_main.classList.add("cart_elements");
    let div_img =document.createElement("div");
    let div_product =document.createElement("div");
    div_product.classList.add("cart_about");
    let img =document.createElement("img");
    img.src =element.img;
    img.classList.add("cart_img");
    div_img.append(img);
    let h2 =document.createElement("h2");
    h2.innerText =element.name;
    let h =document.createElement("h3");
    h.innerText =element.price;
    let butbuy =document.createElement("button");
    butbuy.innerText ="BUY NOW";
    butbuy.classList.add("but");
    let butclear=document.createElement("button");
    butclear.innerText="Remove from Cart";
    butclear.classList.add("but");

    butclear.addEventListener('click', function() {
        removeItem(element.name, div_main);
    });
    div_product.append(h2, h, butbuy,butclear);
    div_main.append(div_img, div_product);
    cart.append(div_main);
  });
}