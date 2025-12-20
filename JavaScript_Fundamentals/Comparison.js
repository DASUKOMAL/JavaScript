/** Comparison Operater */

// greaterthen Operator
console.log(50 > 30);

// lessthan Operater
console.log(50 < 30);

//greaterthan or Equalto Operater
console.log(30 >= 30);

//lessthan or Equalto Operater
console.log(40 <= 30);

// Equalto Operater
console.log(30 == 30);



/** Comparison on String 
 *  the String comparion happens basiced on "ASCII" values
*/

console.log("mango" > "apple");
// it is true because the ASCII values of  "m = 109" & " a = 96"


console.log("mango" < "apple");
// it is false because the ASCII value of "m" is not lessthan "a"


console.log("glowing" < "glow");
// if the ASCII value is same for both first charater then it goes to the next charater



/**comparison between String and Number */

console.log("2" > 1);
//it Operater convert the String into Number

console.log( "01" == 1 );
//In the real terms it is "falues"
//but the Operator performs "True"
// to we have to perform Strict Equality


/** Strict Equality */
console.log("01" === 1);
console.log(null == undefined); // using Equalto Operater
console.log(null === undefined); // using strict Equality

// hear if the null value compared with a number then the null will convert into number
console.log(null > 0); // null becomes 0
console.log(null < 1);
console.log(null >= 0);
console.log(null == 0); // here null is null

/** if any number is compared with undefined it returns Falues */