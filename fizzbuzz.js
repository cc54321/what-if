const promt = require('promt - sync')({signit:true});

let num = Number(prompt("enter a number:"));

console.log(num);

if(num % 15 === 0){
console.log("fizbuzz");

} else if(num % 3 === 0){
    console.log("fizz");

} else if(num % 5 === 0){
    console.log("buzz");
}
