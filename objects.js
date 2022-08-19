const prompt = require('prompt-sync')();
let obj ={
    name: 'Shivendra Jat',
    nickname: 'Hello❤', 
    enr: '201B256',
    isActive: 'True',
    marks:[31,23,43,54,65,87],
}
console.log(obj);     // This is how we can access the object 
console.log(obj.name);// this is how we can access a perticuler Key of object
console.log(obj['marks']);// This is the another method to access the key of object
obj.marks.push(32); // This will add 32 in the end of the marks array
console.log(obj.marks);
obj.marks.pop(); // This will remove one element from the end of marks array
console.log(obj.marks);
obj.marks.unshift(69); //This will add 69 in the marks array but in the begining of the array.
console.log(obj.marks);
obj.marks.shift();    //This will remove one element from the begining of marks array
console.log(obj.marks);

