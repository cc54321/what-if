/*space-boxing.js
Julio Cesar Chavez Mark VII is an interplanetary space boxer, who currently holds the championship belts for various weight categories on many different planets within our solar system. However, it is often difficult for him to recall what his "target weight" needs to be on earth in order to make the weight class on other planets. Write a program to help him keep track of this.

It should ask him what his earth weight is, and to enter a number for the planet he wants to fight on. It should then compute his weight on the destination planet based on the table below:

#	Planet	Relative gravity
1	Venus	0.78
2	Mars	0.39
3	Jupiter	2.65
4	Saturn	1.17
5	Uranus	1.05
6	Neptune	1.23
So, for example, if Julio weighs 128 lbs. on earth, then he would weigh just under 50 lbs. on Mars, since Mars' gravity is 0.39 times earth's gravity. (128 * 0.39 is 49.92).
*/


const prompt = require('prompt-sync')({signit:true});

let weight = Number(prompt("enter you earth weight: "));
    console.log("please enter the number of planets you will be traveling to using this system. 1-venus , 2-mars , 3-jupiter , 4-saturn , 5-uranus , 6-neptune: ");
let planetNum = Number(prompt("> "));

console.log(weight);
console.log(planetNum);

if(planetNum === 1){
    console.log("you picked venus");
    console.log(`your weight needs to be: ${weight * 0.78}`)   

} else if (planetNum === 2){
    console.log("you picked mars");
    console.log(`your weight needs to be: ${weight * 0.39}`)  

} else if (planetNum === 3){
    console.log("you picked jupiter");
    console.log(`your weight needs to be: ${weight * 2.65}`)  

} else if (planetNum === 4){
    console.log("you picked saturn");
    console.log(`your weight needs to be: ${weight * 1.17}`)  

} else if (planetNum === 5){
    console.log("you picked uranus");
    console.log(`your weight needs to be: ${weight * 1.05}`) 
     
} else if (planetNum === 6){
    console.log("you picked neptune");
    console.log(`your weight needs to be: ${weight * 1.23}`) 
    
}else {
    console.log("invalid entry")
}

