const prompt = require('prompt-sync')();
function add(a,b){
    var sum = a+b;
    console.log("Addition of these numbers is: "+sum);
}

var num1=prompt("Enter the First No. :");
var num2=prompt("Enter the Second No. :");
var x = parseInt(num1);
var y = parseInt(num2);
add(x,y);
