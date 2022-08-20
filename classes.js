const prompt = require('prompt-sync')();



// This is How we can declare a class in JavaScript
// class Product{
//     constructor(item_name,price,discount,product_code){
//         this.item_name=item_name;
//         this.price=price;
//         this.discount=discount;
//         this.product_code=product_code;
//     }
// }
// let product1 = new Product('Pencil',10,2,'P1');
// let product2 = new Product('Book',100,5,'P2');
// console.log(product1.item_name);
// console.log(product2.item_name)



// Class Expressions
// const Product1= class {
//     constructor(item_name,price,discount,product_code){
//         this.item_name=item_name;
//         this.price=price;
//         this.discount=discount;
//         this.product_code=product_code;
//     }
// }
// let chair=new Product1('Chair',499,15,'C10');
// console.log(Product1.name);


// Getter and Setter function in Classes

// const Product1= class {
//     constructor(item_name,price,discount,product_code){
//         this.item_name=item_name;
//         this.price=price;
//         this.discount=discount;
//         this.product_code=product_code;
//     }
//     get getDiscountValue(){
//         return this.discount;
//     }
//     set setDiscountValue(value){
//         this.discount=value;
//     }
// }
// let chair=new Product1('Chair',499,15,'C10');
// console.log(chair.getDiscountValue);
// chair.setDiscountValue=10
// console.log(chair.getDiscountValue);



//  Methods in Classes

// const Product1= class {
//     constructor(item_name,price,discount,product_code){
//         this.item_name=item_name;
//         this.price=price;
//         this.discount=discount;
//         this.product_code=product_code;
//     }
//     get getDiscountValue(){
//         return this.discount;
//     }
//     set setDiscountValue(value){
//         this.discount=value;
//     }
//     discountValue(){
//         return this.discount*this.price/100;
//     };
// }
// let chair=new Product1('Chair',499,15,'C10');
// console.log(chair.discountValue());


//This is About Extension Classes
class Product{
    constructor(itemName){
        this.itemName=itemName;
    }
    getItemName(){
        return this.itemName + " is a Product";
    }
}

class Furniture extends Product{
    constructor(itemName){
        super(itemName);
    }
    getItemName(){
        return this.itemName + " is a Furniture";
    }
}
let pencil = new Product('Pencil');
let chair = new Furniture('Chair');
console.log(pencil.getItemName());
console.log(chair.getItemName());