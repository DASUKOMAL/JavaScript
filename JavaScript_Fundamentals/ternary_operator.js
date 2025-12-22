/**
 * Ternary Operator Examples --> condition yes : no
 */

// Declare a variable to store total marks scored
const TotalMarksScored = 60;

// Traditional if-else condition
if (TotalMarksScored < 40) { 
  // If marks are less than 40, print this message
  console.log("You need to work hard.");
} else { 
  // Otherwise, print success message
  console.log("You cleared the exam. Great!!!");
}

// Using Ternary Operator — same logic in one line
(TotalMarksScored < 40) 
  ? console.log("You need to work hard.")   // if true → print this
  : console.log("You cleared the exam. Great!!!"); // if false → print this

// Optimized version: Store result in a variable first
const result = TotalMarksScored < 40 
  ? "You need to work hard."               // value if true
  : "You cleared the exam. Great!!!";      // value if false

// Then log the result — cleaner and reusable
console.log(result);