/**
 * For Loop
 * 
 * Syntax:
 * for (initialization; condition; increment/decrement) {
 *     statements...
 * }
 */

// Print numbers 0 to 9 and "Hello...." each time
for (let i = 0; i < 10; i++) {
    console.log(i);
    console.log("Hello....");
}

// Trying to access 'i' outside the loop will cause ReferenceError
// because 'i' is block-scoped with 'let'
console.log(i); // Error: i is not defined

console.log("loop has ended!!!"); // This runs after loop finishes

// Print numbers 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Loop through each character in a string
const UserName = "Dasu Komal";
const StringLength = UserName.length;

for (let i = 0; i < StringLength; i++) {
    console.log(UserName[i]); // Access character at index i
}