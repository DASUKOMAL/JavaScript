/**
 * Nullish Coalescing Operator (??)
 * || vs ??
 */

const firstName = "Komal"; 
// if the value is undefined or null, it prints the right side ("hello")
console.log(firstName ?? "hello"); 

// ?? prints "hello" only if the left side is undefined or null
console.log(undefined ?? "hello"); 

const a = 0;
// || treats 0 as falsy → returns 1
console.log(a || 1); 
// ?? treats 0 as truthy → returns 0
console.log(a ?? 1); 

let b = 12;
let c; 
// c is undefined → c ?? 0 → returns 0 → b + 0 = 12
console.log(b + (c ?? 0));
