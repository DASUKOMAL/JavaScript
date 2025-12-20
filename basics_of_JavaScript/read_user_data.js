/**
 * read data from user
 * istall a mobule "npm install readline-sync" in terminal
 */

const readlineSync = require("readline-sync");
const  userName = readlineSync.question("May i know your name ?? ");
const userAge = readlineSync.question ("May i know your Age ? ")
//console.log(typeof userAge);
//console.log("welcome" + userName + " to JavaScript");
console.log(`welcome ${userName} to JavaScript`);
console.log(`thank you for letting us know your Age`)

const yearOfBirth = 2025 - Number(userAge) ;
console.log(`you were born in the year ${yearOfBirth}`)
