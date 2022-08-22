var x = 5;

// While loop
// while(x>=1){
//     console.log(x);
//     x=x-1;
// }


// Do While loop
// do{
//     console.log(x*2);
//     x=x-1;
// }while(x>=1)


//For loop
// for(var y =1;y<=5;y++){
//     console.log(y*3);
// }

var a = {
    name: "Shiva",
    class: "By",
    Enr: "201B256",
    age:19
}
//For In loop (It is mainly used in Objects)
for(var z in a){
    console.log(z+ " : "+a[z]);
}

var array = ["Shiva","Ok","Hello",3,8,5,1];
//for Each loop (It is mainly used in arrays)
array.forEach(function(index,a){
    console.log(index+" : "+a);
})