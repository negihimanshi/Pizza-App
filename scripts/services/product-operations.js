//Products CRUD Operation
//Contains the Logic for Fetching
//Adding, sorting, searching, deletion, updation

// It talks to Network Later to bring the JSON, and 
// convert JSON into Objects vice-versa

import makeNetworkCall from "./api-client.js";
import Product from "../models/product.js";

const productOperations ={
    products:[], //key:value
    search(pizzaId){
        const product = this.products.find(currentProduct => currentProduct.id==pizzaId);
        console.log('Product found ', product);
        product.isAddedInCart = true;
        console.log("Array ", this.products);
    },
    getProductsInCart(){
        const productInBasket = this.products.filter(product=>product.isAddedInCart);
        return productInBasket;
    },
    async loadProducts(){
        const pizzas = await makeNetworkCall();
        const pizzaArray = pizzas['Vegetarian'];
        const productsArray = pizzaArray.map(pizza=>{
            let pizzaURL = pizza.assets.product_details_page[0].url;
            if (pizzaURL=="https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/momo-mia-veg.5f34ea52c10db4a56881051692a618ca.1.jpg"){
                pizzaURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhwaU93sXfzYV3dbjgD-Z19s70M9vn5DkDt0qgWXdGjOWVMnoRhlWp3_Z4ycn-7q3_e7w&usqp=CAU";
            } // Updating the image if not found
            // Can also use location.href and error message
            const currentPizza = new Product(pizza.id, pizza.name, pizza.menu_description, pizza.price, pizzaURL);
            return currentPizza;
        });
        console.log('Product Array ', productsArray);
        this.products = productsArray;
        return productsArray;
    }
}
export default productOperations;