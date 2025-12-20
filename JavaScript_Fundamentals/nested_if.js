// Import the readline-sync module to take input from the user
const readlineSync = require("readline-sync");

// Ask the user to enter a number and convert the input to a Number type
const number = Number(readlineSync.question("Enter a Number : "));

// Print the entered number
console.log(number);

// Find the remainder when the number is divided by 2
const reminder = number % 2;

// Check if the number is even
if (reminder === 0) {
    // This block runs if the number is even
    console.log(`${number} is even number`);

    // Check if the even number is divisible by 4
    if (number % 4 === 0) {
        console.log(`${number} is divisible by 4`);
    } else {
        console.log(`${number} is not divisible by 4`);
    }

} else {
    // This block runs if the number is odd
    console.log(`${number} is odd number`);

    // Check if the odd number is divisible by 5
    if (number % 5 === 0) {
        console.log(`${number} is divisible by 5`);
    } else {
        console.log(`${number} is not divisible by 5`);
    }
}
