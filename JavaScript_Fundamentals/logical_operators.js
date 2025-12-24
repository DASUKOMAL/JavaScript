/**
 * Logical Operators with Conditional Statements
 *
 * 1. OR (||) → Returns true if at least one condition is true
 * 2. AND (&&) → Returns true only if ALL conditions are true
 * 3. NOT (!) → Flips the boolean value
 * 4. NULLISH COALESCING (??) → Returns right-side if left is null/undefined
 */

const physics = 90;
const math = 95;
const chemistry = 88;
const english = 90;
const sanskrit = 99;

// AND Operator
if (physics > 85 && math > 85 && chemistry > 85) {
  console.log("You are eligible for Engineering");
} else {
  console.log("You are not eligible for Engineering");
}

// OR Operator
if (physics > 85 || math > 85 || chemistry > 85) {
  console.log("You are eligible for Engineering");
} else {
  console.log("You are not eligible for Engineering");
}


// NOT Operator
const isStudentEligible = false;

if (!isStudentEligible) {
  // ( ! isStudentEligible ) means "not isStudentEligible" — flips the boolean
  // Since isStudentEligible is false, !false becomes true → enters this block
  console.log("You are eligible for Engineering");
} else {
  console.log("You are not eligible for Engineering");
}
