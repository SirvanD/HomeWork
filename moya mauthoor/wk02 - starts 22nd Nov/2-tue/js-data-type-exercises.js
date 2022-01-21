// Data types

typeof 15
// Prediction: Number
// Actual: Number

typeof 5.5
// Prediction: Number
// Actual: Number

typeof NaN
// Prediction: Number
// Actual: Number

typeof "hello"
// Prediction: String
// Actual: String

typeof true
// Prediction: Boolean
// Actual: Boolean

typeof 1 != 2
// Prediction: Boolean
// Actual: true

"hamburger" + "s"
// Prediction: "hamburgers"
// Actual:

"hamburgers" - "s"
// Prediction: Undefined
// Actual: NaN

"1" + "3"
// Prediction: "13"
// Actual: "13"

"1" - "3"
// Prediction: -2
// Actual: -2

"johnny" + 5
// Prediction: "johnny5"
// Actual: "johnny5"

"johnny" - 5
// Prediction: Undefined
// Actual: NaN

99 * "luftbaloons"
// Prediction: NaN
// Actual: NaN

// Arrays
// Add an element to the back of an array 
.push()

// Remove an element from the back of an array.
.pop()

// Add an element to the front of an array.
.unshift()

// Remove an element from the front of an array.
.shift()

// Concatenates all the elements in an array into a string.
.join()

// Separates the characters of a string into an array. This one is a string method.
.split("")

// What will the contents of the below arrays be after the code samples are executed? 
// var numbers = [2, 4, 6, 8]
// numbers.pop()
// numbers.push(10)
// numbers.unshift(3)

numbers will be [3, 2, 4, 6, 10]

// What is the return value of the below code sample? 
// var morse = ["dot", "pause", "dot"]
// var moreMorse = morse.join(" dash ")
// moreMorse.split(" ")

moreMorse will be ["dot", "dash", "pause", "dash", "dot"] 

// What will the contents of the below array be after the below code sample is executed?
// var bands = []
// var beatles = ["Paul", "John", "George", "Pete"]
// var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
// bands.push(beatles)
// bands.unshift(stones)
// bands[bands.length - 1].pop()
// bands[0].shift()
// bands[1][3] = "Ringo"

bands will be 
[
    ["Mick", "Keith", "Ronnie", "Charlie"],
    ["Paul", "John", "George", "Ringo"]
]

// Booleans & Comparison Operators
// Fill out the truth tables below for && (and), || (or) and one that uses multiple comparison operators. All you need to do is replace the ?'s with either true or false.
a	    b	    a AND b
true	true	true
true	false	false
false	true	false
false	false	false

a	    b	    a OR b
true	true	true
true	false	true
false	true	true
false	false	false

a	b	a != b
3	3	false
1	5	true
2	"2"	false

a	    b	    !a AND (a OR b)
true	true	false
true	false	false
false	true	true
false	false	false


// Conditionals
// The hasId variable would be a boolean. 

if (hasId) {
    if (age > 75) {
        console.log("Are you sure you want to be here?");
    } else if (age >= 21) {
        console.log("Come on in!");
    } else if (age >= 18) {
        console.log("Come on in (but no drinking)!");
    } else {
        console.log("You're too young to be in here!")
    }
} else {
    console.log("No ID, no entry");
}

// Bonus: Fizz-Buzz

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            console.log("Fizzbuzz");
        } else {
            console.log("Fizz");
        }
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Bonus (for the bonus)

function fizzBuzz(number) {
    if (number % 3 === 0) {
        if (number % 5 === 0) {
            console.log("Fizzbuzz");
        } else {
            console.log("Fizz");
        }
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else {
            console.log(number);
    }
}


