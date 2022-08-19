const prompt = require('prompt-sync')();
let Jsc = ['Data Types','Arrays','Functions','Objects','Classes']; //Thisw how we can initialize a array in JavaScript
console.log(Jsc);

// Some Build in Functions of Arrays
console.log(Jsc.length);
console.log(Jsc[1]);
console.log(Array.isArray(Jsc));
console.log(Jsc.includes('Arrays'));
Jsc[0]='Loops';
console.log(Jsc);
console.log(Jsc.indexOf('Functions'));
console.log(Jsc.indexOf('Funct'));

// Modifying the array functions

let marks = [23,34,54,5,65,7,32,23]

marks.push(69);
marks.unshift(88);
marks.pop();
marks.shift();
marks.splice(2,2);
marks.reverse();