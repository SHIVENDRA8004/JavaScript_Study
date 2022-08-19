const prompt = require('prompt-sync')();
let Jsc = ['Data Types','Arrays','Functions','Objects','Classes']; //Thisw how we can initialize a array in JavaScript
console.log(Jsc); // This will print whole Jsc array

// Some Build in Functions of Arrays
console.log(Jsc.length); // This func will print length of the array (How many items array contains)
console.log(Jsc[1]); // This will print the array element at index 1
console.log(Array.isArray(Jsc)); //This is a boolean function which prints True when any array Jsc is present in this arrays.js file else it will print False
console.log(Jsc.includes('Arrays'));// This is also a boolean function which prints True when item/string given in paranthesis is present in array otherwise it will print False
console.log(Jsc.indexOf('Functions'));// This will print index of given item/string if it is present in the array 
console.log(Jsc.indexOf('Funct'));// If it is not present then it will print -1.

// Modifying the array functions
Jsc[0]='Loops'; // This will updated value of index = 0 to Loops 
console.log(Jsc);

let marks = [23,34,54,5,65,7,32,23]

marks.push(69);// This will add 69 in the marks array at the end.
console.log(marks);
marks.unshift(88);// This will add 88 in the marks array at the beginning.
console.log(marks);
marks.pop();// This will remove 1 element from the marks array from the end.
console.log(marks);
marks.shift();// This will remove 1 element from the marks array from the beginning.
console.log(marks);
marks.splice(2,2); // syntax of func. :- array.splice(a,b); This will remove b items from the a'th index from the marks array 
console.log(marks);
marks.reverse(); // This func will reverse the items of the array
console.log(marks);