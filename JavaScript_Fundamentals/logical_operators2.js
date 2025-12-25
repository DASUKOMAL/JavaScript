/**
 * Logical Operators with Truthy & Falsy Values
 * 
 * 1. OR (||) → Returns first truthy value, or last falsy if none
 * 2. AND (&&) → Returns first falsy value, or last truthy if all true
 *
 * Falsy values: "", 0, null, undefined, false, NaN
 * Truthy values: Everything else — "hello", 42, {}, [], etc.
 */

// OR Operator (||)
// Uses "short-circuit evaluation" — stops at first truthy value
const firstName = "";          // falsy (empty string)
const lastName = "Komal";      // truthy

// || returns the first truthy value it encounters
// Here: firstName is falsy → checks lastName → truthy → returns "Komal"
const userName = firstName || lastName || null;
console.log(`Name: ${userName}`); // Output: Name: Komal

// Example with numbers
let a = 12;
let b; // undefined → falsy
// b || 0 → since b is falsy, returns 0
// a + 0 → 12 + 0 = 12
console.log(a + (b || 0)); // Output: 12

// AND Operator (&&)
// Returns first falsy value — if all are truthy, returns last truthy
const firstName2 = "Dasu";     // truthy
const lastName2 = "";          // falsy

// && stops at first falsy value → returns ""
const userName2 = firstName2 && lastName2;
console.log(`Name: ${userName2}`); // Output: Name: ""

// Another example — all truthy → returns last value
const username3 = firstName2 && lastName2 && "Hello";
// firstName2 → truthy → keeps going
// lastName2 → falsy → stops → returns ""
console.log(`Name: ${username3}`); // Output: Name: ""

// To fix: Make sure all values are truthy if you want the last one
// Example: const username4 = firstName2 && "Hello" && lastName2;
// → returns "" (because lastName2 is falsy)

// TL;DR:
// || → gives first truthy, or last falsy
// && → gives first falsy, or last truthy if all true
