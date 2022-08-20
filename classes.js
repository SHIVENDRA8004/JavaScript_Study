const prompt = require('prompt-sync')();
class Product{
    constructor(item_name,price,discount,product_code){
        this.item_name=item_name;
        this.price=price;
        this.discount=discount;
        this.product_code=product_code;
    }
}
let product1 = new Product('Pencil',10,2,'P1');
let product2 = new Product('Book',100,5,'P2');
console.log(product1.item_name);
console.log(product2.item_name)