/**
 * Exercise on Logical Operators
 */

// OR Operator (||)
// Returns the FIRST truthy value it encounters — or LAST if all falsy

console.log(3 || 2 || 1);       // → 3 (3 is truthy → stops here)
console.log("" || 0 || 2);      // → 2 ("" and 0 are falsy → 2 is truthy → returns 2)
console.log("" || 0 || undefined); // → undefined (all falsy → returns LAST value: undefined)
console.log("" || "null" || 2); // → "null" (string "null" is TRUTHY → returns it)


// AND Operator (&&)
// Returns the FIRST falsy value it encounters — or LAST if all truthy

console.log(3 && 2 && 1);       // → 1 (all truthy → returns LAST value: 1)
console.log("" && 0 && 2);      // → "" (first falsy → stops here → returns "")
console.log("undefined" && "null" && ""); // → "" (all truthy until last → returns LAST value: "")

