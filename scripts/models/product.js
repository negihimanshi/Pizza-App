//Product Model (Blue Print)
//Prodyct JS contains the Structure of a Pizza Object
//Pizza Object - Id, Name, Desc, Price, Rating, Image

class Product{
    constructor(id, name, desc, price, url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhwaU93sXfzYV3dbjgD-Z19s70M9vn5DkDt0qgWXdGjOWVMnoRhlWp3_Z4ycn-7q3_e7w&usqp=CAU"){
        //this - keyword (Contains current calling object reference)
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.url = url;
        this.isAddedInCart = false;
    }
}

export default Product;