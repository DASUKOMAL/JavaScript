/**
 * type Conversion
 * to String..
 * to Number..
 * to Boolean..
 */
const a = "3";
const b = "10";

//converts string into number = "Number"
console.log(Number(a) + Number(b));

const c = Number(a);
const d = Number(b);

const e = String(a);
const f = String(b);

//if we want to convert string into a number
// which contains alphabets then it returns NaN

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(Boolean(a));
console.log(Boolean(c));
console.log(Boolean(e));

//boolean conversions.
//as "a" is not an empty string it returns true. 
//boolean of any number is true except.
console.log(Boolean(a));