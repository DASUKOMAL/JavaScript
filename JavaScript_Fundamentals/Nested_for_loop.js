/**
 * Nested For Loop
 * 
 * Outer loop controls the multiplier (i)
 * Inner loop controls the multiplicand (j) and calculates product
 * 
 * Example output for i = 2:
 * 2 x 1 = 2
 * 2 x 2 = 4
 * ...
 * 2 x 10 = 20
 */

for (let i = 2; i < 3; i++) {           // Outer loop: runs only once (i=2)
    for (let j = 1; j <= 10; j++) {      // Inner loop: runs 10 times (j=1 to 10)
        // Uncomment to debug: see current i and j values
        // console.log(`i is ${i}, j is ${j}`);

        let product = i * j;             // Calculate product of i and j
        console.log(`${i} x ${j} = ${product}`); // Print multiplication table line
    }
}