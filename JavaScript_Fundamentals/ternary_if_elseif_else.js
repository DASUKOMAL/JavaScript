/**
 * Ternary Operator Examples — Handling multiple conditions (if-elseif-else)
 * This shows how to chain ternary operators like a ladder
 */

// Declare a variable to store total marks scored
const TotalMarksScored = 70; // Test value — change to see different grades!

// Traditional if-else-if ladder (verbose but clear)
if (TotalMarksScored < 40) { 
  // Fail zone
  console.log("You need to work hard.");
  
} else if (TotalMarksScored < 60) { 
  // C Grade
  console.log("You Got C Grade");
  
} else if (TotalMarksScored < 75) { 
  // B Grade
  console.log("You Got B Grade, Good!");
  
} else if (TotalMarksScored < 85) { 
  // A Grade
  console.log("You Got A Grade, Graat!!!");
  
} else { 
  // S Grade — top tier!
  console.log("You Got S Grade, Genius!!!");
}

// Ternary Operator Chain — same logic, compact & elegant
const result = 
  TotalMarksScored < 40 ? "You need to work hard" : 
  TotalMarksScored < 60 ? "You Got C Grade" :
  TotalMarksScored < 75 ? "You Got B Grade, Good!" :
  TotalMarksScored < 85 ? "You Got A Grade, Graat!!!" :
  "You Got S Grade, Genius!!!"; // default/fallback

// Log the final result — same output as above, but in one line!
console.log(result);