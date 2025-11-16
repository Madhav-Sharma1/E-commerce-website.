let shoes_div=document.querySelector(".shoes");
let bags_div=document.querySelector(".bags");
let caps_div=document.querySelector(".caps");
let cloths_div=document.querySelector(".cloths");
let shoes_data = []; 
let bage_data=[];
let caps_data=[];
let cloths_data=[];

function addToCart(product) {
    fetch('/api/cart/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Item added to cart:', product);
        alert(product.name + ' added to cart!');
    })
    .catch(error => console.error('Error adding to cart:', error));
}
fetch('./data/shoes_data.json')
    .then(response => response.json())
    .then(data => {
        shoes_data = data;
        renderShoes();
    })
    .catch(error => console.error('Error loading shoes data:', error));
  
fetch('./data/bags_data.json')
    .then(response => response.json())
    .then(data => {
        bags_data = data;
        renderbags();
    })
    .catch(error => console.error('Error loading bags data:', error));
fetch('./data/caps_data.json')
    .then(response => response.json())
    .then(data => {
        caps_data = data;
        rendercaps();
    })
    .catch(error => console.error('Error loading caps data:', error));
fetch('./data/cloths_data.json')
    .then(response => response.json())
    .then(data => {
        cloths_data = data;
        rendercloths();
    })
    .catch(error => console.error('Error loading cloths data:', error));


function renderShoes() {
    shoes_data.forEach(function(element){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.setAttribute("src",`${element.img}`);
        img.classList.add("image");
        console.log(img.src);
        let h3=document.createElement("h3");
        h3.innerText=`${element.name}`;
        let h=document.createElement("h4");
        h.innerText=element.gender;
        let p=document.createElement("p");
        p.innerHTML=element.price;
        let but=document.createElement("button");
        but.innerText="Add TO Cart";
        but.classList.add("but");

        but.addEventListener('click', function() {
            addToCart(element);
    });
        div.append(img);
        div.append(h3);
        div.append(h);
        div.append(p);
        div.append(but);
        shoes_div.append(div);
    });
}
function renderbags(){
bags_data.forEach(function(element){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.setAttribute("src",`${element.img}`);
    img.classList.add("image");
    console.log(img.src);
    let h3=document.createElement("h3");
    h3.innerText=`${element.name}`;
    let h=document.createElement("h4");
    h.innerHTML=element.price;
    let but=document.createElement("button");
    but.innerText="Add TO Cart";
    but.classList.add("but");

    but.addEventListener('click', function() {
            addToCart(element);
    });
    div.append(img);
    div.append(h3);
    div.append(h);
    div.append(but);
    bags_div.append(div);
});
}
function rendercaps(){
caps_data.forEach(function(element){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.setAttribute("src",`${element.img}`);
    img.classList.add("image");
    console.log(img.src);
    let h3=document.createElement("h3");
    h3.innerText=`${element.name}`;
    let h=document.createElement("h4");
    h.innerHTML=element.price;
    let but=document.createElement("button");
    but.innerText="Add TO Cart";
    but.classList.add("but");

    but.addEventListener('click', function() {
            addToCart(element);
    });
    div.append(img);
    div.append(h3);
    div.append(h);
    div.append(but);
    caps_div.append(div);
});
}
function rendercloths(){
cloths_data.forEach(function(element){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.setAttribute("src",`${element.img}`);
    img.classList.add("image");
    console.log(img.src);
    let h3=document.createElement("h3");
    h3.innerText=`${element.name}`;
    let h=document.createElement("h4");
    h.innerHTML=element.price;
    let but=document.createElement("button");
    but.innerText="Add TO Cart";
    but.classList.add("but");

    but.addEventListener('click', function() {
            addToCart(element);
    });
    div.append(img);
    div.append(h3);
    div.append(h);
    div.append(but);

    cloths_div.append(div);
});
}
