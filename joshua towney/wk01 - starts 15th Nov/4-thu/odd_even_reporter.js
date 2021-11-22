// Write a while loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen

// 0 is even
// 1 is odd
// 2 is even
// 3 is odd
// 4 is even
// 5 is odd 
// 6 is even
// 7 is odd  ...(more lines omitted)

var currentNumber = 0;

while (currentNumber < 21) {
    
    if (currentNumber % 2 === 0) {
        console.log(currentNumber + " is even!");
    } else {
        console.log(currentNumber + " is odd!");
    }
        currentNumber = currentNumber + 1
}

 