var x = 25; // If we are giving data as numeric value then data type is number
console.log(typeof x); // 'typeof' if a pre-defined function that returns data type of given variable
var y= "Hello"; // If we are giving data in Single/Double(' '/" ") Quotation then data type is a string
console.log(typeof y);
var y= "345"; // Even if we are giving numeric value in quotation marks then it is considered as string
console.log(typeof y);
var z = true; // If the data is in form of true/false then data type is boolean
console.log(typeof z);
var a = ["Shiv","Shivendra","Jat","201B256"]; // if we are giving in data in this formate then the data type is array but it will as object
console.log(typeof a);
var b  = {first:"Shivendra",last:"Jat",class:"BY"}// If we are giving data in form of (key:value) pair then its data type is Object
console.log(typeof b);
var c = null; // If we intialize variable as null it will return as Object Data type but it is null data type in actual
console.log(typeof c);
var d;// if we just initialize a variable but didn't assign anything to it then the data type is undefined
console.log(typeof d);