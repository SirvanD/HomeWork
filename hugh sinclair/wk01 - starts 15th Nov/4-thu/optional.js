// refer to the welcome.js file below to answer the following questions

// 1. // proper indentation help makes code easier to read // which line of code should be indented? 

// 2. // rewrite the code below with proper indentation done

// 3. // if you run the code above what will be displayed in the console?

// 4. // I want the program to just display the line "ending at 10, bye!" in the console // you can add/remove/change any line(s) of code except for line 10. what would you change? // write the updated program below

// 1) anything inside curley brackets can be intented to show it's "parent", so lines after the while loop that are contained WITHIN the while loop should be indented, and the line that is within the IF statement also needs to be indented, to show who's child it is.

// 2)

var number = 5;

while (number < 10) {
    number = number + 1;
    if (true) {
        console.log(number); 
    }
}

console.log('stopping at ' + number + ', bye!');

// 3) it counts upwards, but goes 6 to 10 inclusive.

// 4) 

var number = 5;

while (number < 10) { // can technically remove this whole thing and just set number to 10.
    number++;
};

console.log('stopping at ' + number + ', bye!');


// # The Introduction

function greetings(name) {
    console.log(`nice to meet you! ${name}`);
};

// # The Age Calculator

function calculateAge(dob, currentYear) {
    var age = currentYear - dob;
    console.log(`You are either ${age -1} or ${age} years old!`);
};

calculateAge(Number(process.argv[2]), Number(process.argv[3]));


// # Which number's bigger?

function printBiggerNumber (numberOne, numberTwo) {
    if (isNaN(numberOne) || isNaN(numberTwo)) {
        console.log(`Please enter numbers only!`)
    }else if (numberOne > numberTwo) {
        console.log(`${numberOne} is the bigger number!`);
    }else if (numberOne < numberTwo) {
        console.log(`${numberTwo} is the bigger number!`);
    }else { 
        console.log(`They're the same!`);
    } 

};

