
/*weekday.js
Write a program that prompts the user for a number, then displays the appropriate day of the week according to the table below.

number	day
1	Monday
2	Tuesday
3	Wednesday
4	Thursday
5	Friday
6	Saturday
7	Sunday
anything else	"error"  */

const prompt = require('prompt-sync')({signit:true});

let weekday = Number(prompt("please enter the number of the weekday:"));
console.log(weekday);

if (weekday === 1){
    console.log("today is Monday");
} else if (weekday === 2){
    console.log("today is Tuesday");
} else if (weekday === 3){
    console.log("today is Wednesday");
} else if (weekday === 4){
    console.log("today is Thursday");
} else if (weekday === 5){
    console.log("today is Friday");
} else if (weekday === 6){
    console.log("today is Saturday");
} else if (weekday === 7){
    console.log("today is Sunday");
} else 

    console.log(error);
