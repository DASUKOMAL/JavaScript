<<<<<<< HEAD
// Demonstrates the use of the 'break' statement to exit loops early

// Simple 'for' loop with break at i === 5
for (let i = 0; i < 10; i++) { 
    if (i === 5) { 
        console.log("Breaking the loop at", i); // Log when breaking
        break; // Exit the loop when i equals 5
    }
    console.log(i); // Print current value of i
}

// Nested loops with labeled break
outerLoop: // Label for the outer loop
for (let i = 0; i < 3; i++) { 
    for (let j = 0; j < 3; j++) { 
        if (j === 1) { 
            break outerLoop; // Exit BOTH loops when j equals 1
        }
        console.log(i, j); // Print current i and j values
    } 
}

// Using break to terminate a loop early and build a string
let text = ""; 
for (let i = 0; i < 10; i++) { 
    if (i === 4) { 
        break; // Loop terminates when i is 4
    }
    text += "The number is " + i + "\n"; // Append current number to text
}
console.log(text); // Print the accumulated text



// Using break in a 'while' loop
let n = 1; 
while (n <= 10) { 
    if (n === 6) { 
        console.log("Loop stopped at", n); // Log when breaking
        break; // Exit loop when n equals 6
    }
    console.log(n); // Print current value of n
    n++; // Increment n
}

// Using break in an infinite 'while(true)' loop
let sum = 0; 
while (true) { 
    // In a real application, this might use a prompt
    // let inputNum = parseInt(prompt("Enter a number (negative to stop):"));
    // We'll use a hardcoded sequence for demonstration
    let inputNum;
    if (sum === 0) inputNum = 5;
    else if (sum === 5) inputNum = 10;
    else inputNum = -1; // Negative to stop
    
    if (inputNum < 0) { 
        break; // Exit the loop if the number is negative
    }
    sum += inputNum; // Add positive number to sum
}
=======
// Demonstrates the use of the 'break' statement to exit loops early

// Simple 'for' loop with break at i === 5
for (let i = 0; i < 10; i++) { 
    if (i === 5) { 
        console.log("Breaking the loop at", i); // Log when breaking
        break; // Exit the loop when i equals 5
    }
    console.log(i); // Print current value of i
}

// Nested loops with labeled break
outerLoop: // Label for the outer loop
for (let i = 0; i < 3; i++) { 
    for (let j = 0; j < 3; j++) { 
        if (j === 1) { 
            break outerLoop; // Exit BOTH loops when j equals 1
        }
        console.log(i, j); // Print current i and j values
    } 
}

// Using break to terminate a loop early and build a string
let text = ""; 
for (let i = 0; i < 10; i++) { 
    if (i === 4) { 
        break; // Loop terminates when i is 4
    }
    text += "The number is " + i + "\n"; // Append current number to text
}
console.log(text); // Print the accumulated text



// Using break in a 'while' loop
let n = 1; 
while (n <= 10) { 
    if (n === 6) { 
        console.log("Loop stopped at", n); // Log when breaking
        break; // Exit loop when n equals 6
    }
    console.log(n); // Print current value of n
    n++; // Increment n
}

// Using break in an infinite 'while(true)' loop
let sum = 0; 
while (true) { 
    // In a real application, this might use a prompt
    // let inputNum = parseInt(prompt("Enter a number (negative to stop):"));
    // We'll use a hardcoded sequence for demonstration
    let inputNum;
    if (sum === 0) inputNum = 5;
    else if (sum === 5) inputNum = 10;
    else inputNum = -1; // Negative to stop
    
    if (inputNum < 0) { 
        break; // Exit the loop if the number is negative
    }
    sum += inputNum; // Add positive number to sum
}
>>>>>>> 2e22d0764ee85862459f22d207f3fa983555b1c6
console.log(`The total sum of positive numbers is: ${sum}`); // Print final sum