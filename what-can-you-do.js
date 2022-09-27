const promt = require('promt - sync')({signit:true});



let entergae = number(prompt("please enter your age"));
console.log(enterage);

if(enterage < 16){
    console.log("you can't drive");
} else if (enterage <= 17){
    console.log(" you can drive but not vote");
 } else if (enterage <= 18){
    console.log("you can vote but not rent a car")
 } else { 
    console.log("you can do it all")
    }
