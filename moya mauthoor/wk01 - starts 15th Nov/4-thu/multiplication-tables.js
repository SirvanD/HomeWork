
// Hey DT & Kasun, I coded the function here to practice passing it into the while loop. But obviously one could just declare a variable like 
// let multipliedBy9 = counter * 9;
// at the start of the while loop for simplicity. 

function multipliedBy9(number) {
    return number * 9;
}

let counter = 0;

while (counter <= 10) {
    console.log(`${counter} x 9 = ${multipliedBy9(counter)}`);
    counter ++;
}

