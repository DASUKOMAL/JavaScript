/**
 * A program that reads 3 strings and prints the smallest string (by length).
 * If multiple strings tie for shortest, it will notify the user.
 */

const firstString = "Dragan Fruit";   // First string to compare
const secondString = "Watermelon";    // Second string to compare
const thirdString = "banana";         // Third string to compare

// Store lengths of each string for easy comparison
const lengthOfFirstString = firstString.length;
const lengthOfSecondString = secondString.length;
const lengthOfThirdString = thirdString.length;

// Compare lengths to find the smallest string
if (
  lengthOfFirstString < lengthOfSecondString && 
  lengthOfFirstString < lengthOfThirdString
) {
  // First string is the shortest
  console.log(`${firstString} is the smallest string`);
  
} else if (
  lengthOfSecondString < lengthOfFirstString && 
  lengthOfSecondString < lengthOfThirdString
) {
  // Second string is the shortest
  console.log(`${secondString} is the smallest string`);
  
} else if (
  lengthOfThirdString < lengthOfFirstString && 
  lengthOfThirdString < lengthOfSecondString
) {
  // Third string is the shortest
  console.log(`${thirdString} is the smallest string`);
  
} else {
  // If none of the above conditions are true, at least two strings have the same minimum length
  console.log("Found 2 or more strings of the same length");
}