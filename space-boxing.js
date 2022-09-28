const promt = require('promt - sync')({signit:true});

let weight = Number(prompt("enter you earth weight: "));

let planetnum = Number(prompt("enter the number of 
the planet you will be traveling to. 1-venus, 2-mars, 
3-jupiter, 4-saturn, 5-uranus, 6-neptune: "));

console.log(weight);
console.log(planetnum);

if(planet === 1){
    console.log("you picked venus");
    console.log(`your weight needs to be: $ {weight * 0.78}`)   

} else if (planet === 2){
    console.log("you picked mars");
    console.log(`your weight needs to be: $ {weight * 0.39}`)  

} else if (planet === 3){
    console.log("you picked jupiter");
    console.log(`your weight needs to be: $ {weight * 2.65}`)  

} else if (planet === 4){
    console.log("you picked saturn");
    console.log(`your weight needs to be: $ {weight * 1.17}`)  

} else if (planet === 5){
    console.log("you picked uranus");
    console.log(`your weight needs to be: $ {weight * 1.05}`) 
     
} else if (planet === 6){
    console.log("you picked neptune");
    console.log(`your weight needs to be: $ {weight * 1.23}`) 
    
}else {
    console.log("invalid entry")
}

