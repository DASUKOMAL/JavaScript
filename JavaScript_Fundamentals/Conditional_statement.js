// Conditional Statements in JavaScript

// Example 1: Simple If Condition
// Check if the user is logged in
const isLoggedIn = true;
if (isLoggedIn) {
  // Execute this block if the condition is true
  console.log("Hello, Komal"); // Output: Hello, Komal
}


// Example 2: If-Else Condition
// Check if the user is an adult
const age = 21;
if (age > 18) {
  // Execute this block if the condition is true
  console.log("Hey, you're an Adult"); // Output: Hey, you're an Adult
} else {
  // Execute this block if the condition is false
  console.log("Hey, you're not an Adult");
}


// Example 3: Else-If Condition
// Check the value of a number
const number = 18;
if (number > 18) {
  console.log("The number is greater than 18");
} else if (number < 18) {          // if there first condition is true it doesn't bother check the other conditions
  console.log("The number is less than 18");
} else if (number === 18) {
  console.log("The number is Equal to 18"); // Output: The number is Equal to 18
}


// Example 4: Nested If Condition
// Check if a number is divisible by 3 and 5
const num = 30;
const reminderAfterDivisionByThree = num % 3;
const reminderAfterDivisionByFive = num % 5;

if (reminderAfterDivisionByThree === 0) {
  console.log("The Number is Divisible by Three"); // Output: The Number is Divisible by Three
}
if (reminderAfterDivisionByFive === 0) {
  console.log("The Number is Divisible by Five"); // Output: The Number is Divisible by Five
}

// Taking Input from the User
// Check if the user is an adult
const readlineSync = require("readline-sync");
const userAge = readlineSync.question("How old are you: ");

if (userAge > 18) {
  console.log("Hey, you're an Adult");
} else if(userAge >12 && userAge < 18){
  console.log("Hey, you're an Teenager");
} else{
    console.log("Hey you're a Kid")
}


