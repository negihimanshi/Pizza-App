//Glue B/w View and Model
//Controller UI I/O
//Data Exchange b/w View and Model

import productOperations from "../services/product-operations.js";

async function loadPizzas(){
    const pizzas = await productOperations.loadProducts();
    console.log('Pizzas are ', pizzas);
    for(let pizza of pizzas){
        preparePizzaCard(pizza);
    }
}
loadPizzas();

{/* <div class="col-4">
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>

    </div> */}

function addToCart(){
    //this - keyword (had current calling object reference)
    alert('Added to cart')
    console.log("Add to Cart Called... ", this);
    const currentButton = this;
    const pizzaId = currentButton.getAttribute('product-id');
    console.log('Pizza id is ', pizzaId);
    productOperations.search(pizzaId);
    printBasket();
}

function printBasket(){
    const cartProducts = productOperations.getProductsInCart();
    const basket = document.querySelector('#basket');
    basket.innerHTML = '';
    let totalPrice = 0;
    for (let product of cartProducts){
        const li = document.createElement('li');
        li.innerText = `${product.name}:     Rs. ${product.price}`;
        totalPrice += parseFloat(product.price);
        basket.appendChild(li);
        const cartTotal = document.querySelector('#totalAmount');
        cartTotal.innerText = totalPrice.toFixed(2);
    }
}

function preparePizzaCard(pizza){
    const outputDiv = document.querySelector('#output');
    const cardDiv = document.createElement('div');
    cardDiv.className = "card";
    cardDiv.style = "width:18rem;";
    const img = document.createElement('img');
    img.src = pizza.url;
    img.className = "card-img-top";
    cardDiv.appendChild(img);
    const cardBody = document.createElement('div');
    cardBody.className = "card-body";
    cardDiv.appendChild(cardBody);
    const h5 = document.createElement('h5');
    h5.className ="card-title";
    h5.innerText = pizza.name;
    const pTag = document.createElement('p');
    pTag.className = "card-text";
    pTag.innerText = pizza.desc;
    const button = document.createElement('button');
    button.setAttribute('product-id', pizza.id);
    button.addEventListener("click", addToCart); //Event Bind
    button.innerText = "Add to Cart";
    button.className = 'btn btn-primary';
    cardBody.appendChild(h5);
    cardBody.appendChild(pTag);
    cardBody.appendChild(button);
    outputDiv.appendChild(cardDiv);
}