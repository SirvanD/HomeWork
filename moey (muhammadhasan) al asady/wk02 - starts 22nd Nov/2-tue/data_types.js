//Data types

//type of 15
// Number

//typeof 5.5
//Number


typeof NaN
// Prediction: Not a number
// Actual: number

typeof "hello"
// Prediction: string 
// Actual: string 

typeof true
// Prediction: boolean
// Actual: boolean

typeof 1 != 2
// Prediction: false
// Actual: true


"hamburger" + "s"
// Prediction: "hamburger s"
// Actual:"hamburgers"

"hamburgers" - "s"
// Prediction:"hamburger"
// Actual: NAN

"1" + "3"
// Prediction:13
// Actual: 13

"1" - "3"
// Prediction: nan
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: nan
// Actual:

99 * "luftbaloons"
// Prediction: nan
// Actual:nan

// ARRAYS
// Add an element to the back of an array.
// Array.push()

// Remove an element from the back of an array.
//array.pop()

// Add an element to the front of an array.
// array.unshift()

// Remove an element from the front of an array.
//array.shift()
// Concatenates all the elements in an array into a string.
//array.concat
// Separates the characters of a string into an array. This one is a string method.
//array.split()

// What will the contents of the below arrays be after the code samples are executed? Come up with an answer yourself before testing it out in the console.

// var numbers = [2, 4, 6, 8]
// numbers.pop()
// numbers.push(10)
// numbers.unshift(3)
var numbers = [3, 2, 4, 6, 10]

// var morse = ["dot", "pause", "dot"]
// var moreMorse = morse.join(" dash ")
// moreMorse.split(" ")
//Answer ['dot', 'dash', 'pause', 'dash', 'dot'] //??

var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles)
bands.unshift(stones)
bands[bands.length - 1].pop()
bands[0].shift()
bands[1][3] = "Ringo"

//answer
//bands = [Ringo ]

// Conditionals
// You're a bouncer at a bar. Given an age variable, create a conditional that satisfies the following requirements...

// If a patron is older than 21, print out "Come on in!".
// If a patron is between 18 and 21, print out "Come on in (but no drinking)!".
// If a patron is younger than 18, print out "You're too young to be in here!".
// If a patron is older than 75, print out "Are you sure you want to be here?".

var age = prompt();

if (age > 21) {
    console.log("come on in")
} else if ( age >= 18 && age <= 21) {
    console.log("Come on in (but no drinking)!")
} else if (age < 18){
    console.log ("Youre to young to be in here!")
} else if (age > 75){
    console.log("Are you sure you want to be in here?")
}
