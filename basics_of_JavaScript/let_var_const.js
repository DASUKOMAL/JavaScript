

/**
 * var v/s let v/s const
 */

// type 1
var message ="hello";
message = "hi"; //with var we can redeclare "var"
console.log(message);


// type 2
let test = "world";
test = "welcome";
/**  let test = "hello world"; 
 *   we can only update it
 *   with let we cannot redeclare   */
console.log(test);


//type 3
const value = "hello world" ;
/** value = "Hello World";  we cannot update or change in canstant
 *  const value ='HELLO WORLD'; we cannot redeclare the contant */
console.log(value);