/**
 *      *
 *      * *
 *      * * *
 *      * * * * 
 *      * * * * *
 */

const symbal = "* "; // Define the symbol to print

console.log(symbal.repeat(1)); // Print 1 star
console.log(symbal.repeat(2)); // Print 2 stars
console.log(symbal.repeat(3)); // Print 3 stars
console.log(symbal.repeat(4)); // Print 4 stars
console.log(symbal.repeat(5)); // Print 5 stars
console.log("=================") // Print separator line


for (i=1;i<=5;i++){ // Loop from 1 to 5
    console.log(symbal.repeat(i)) // Print increasing stars
}
console.log("=================") // Print separator line


// revercing about patten
for(i=5; i>=1;i--){ // Loop from 5 down to 1
    console.log(symbal.repeat(i)) // Print decreasing stars
}
console.log("=================") // Print separator line


// combining the above two patten
for (i=1;i<=5;i++){ // Outer loop: increasing stars
    console.log(symbal.repeat(i)); // Print current row of stars
    if (i>=5) { // Only true on last iteration (i=5)
        for(let i=4;i>=1 ;i--){ // Inner loop: print 4 to 1 stars
            console.log(symbal.repeat(i)); // Print decreasing stars
        }
    }
}
console.log("================="); // Print separator line

const UserName = "Dasu Komal"; // Store full name in constant variable
let count = 0; // Initialize counter variable

for (let i=0 ; i<UserName.length ; i++){ // Loop through each character in UserName
    count++; // Increment count for every character
}

console.log(`${count}`); // Print total character count
console.log("================="); // Print separator line

/**
 * Given a range of number 1 to 100
 * find all the even numbers
 */

let even = 0 ; // Initialize even counter (unused in this section)

for (let i = 1 ; i<=100 ; i++){ // Loop from 1 to 100
    for(let j=i;j%2===0;j++){ // Inner loop: check if current number is even
        console.log(`${i} is an even numbers`); // Print message if even
    } 
}

console.log("================="); // Print separator line

const InputString ="Hello welcome dasu komal"; // Store input string
const vowel = "aeiouAEIOU"; // Define all vowels (uppercase + lowercase)

for (let i =0 ; i<InputString.length; i++){ // Loop through each character in input string
    if (vowel.includes(InputString[i])){ // Check if current char is a vowel
        console.log(`${InputString[i] } is a vowel`) // Print if vowel
    }else{ // If not a vowel
        console.log(`${InputString[i] } is not a vowel`) // Print if not vowel
    } 
}