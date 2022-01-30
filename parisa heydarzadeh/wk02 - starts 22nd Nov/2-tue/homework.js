//link: https://gist.github.com/epoch/202871ec7120fa9e985f0acc07e64f62

// //Data Types

// typeof 15
// // Prediction: Number
// // Actual: Number

// typeof 5.5
// // Prediction: number
// // Actual: number

// typeof NaN
// // Prediction: string
// // Actual: Number

// typeof "hello"
// // Prediction: string
// // Actual: string

// typeof true
// // Prediction: boolean
// // Actual: boolean

// typeof 1 != 2
// // Prediction: number
// // Actual: "I'm getting "true" in console"

// "hamburger" + "s"
// // Prediction: string
// // Actual: string

// "hamburgers" - "s"
// // Prediction: string
// // Actual: NaN

// "1" + "3"
// // Prediction: number
// // Actual: 'string3'

// "1" - "3"
// // Prediction: Number
// // Actual:NaN

// "johnny" + 5
// // Prediction: String and Number
// // Actual: String5

// "johnny" - 5
// // Prediction: string5
// // Actual: string5

// 99 * "luftbaloons"
// // Prediction: string99
// // Actual: NaN

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//Array

// let fruits = ["apple", "banana", "kiwi", "watermelon"];
//Add an element to the back of an array.
//et fruits = fruits.push("strawberry");

//Remove an element from the back of an array.
// let fruits = fruits.pop();

//Add an element to the front of an array.
// let fruits = fruits.unshift('strawberry');

//Remove an element from the front of an array.
// let fruits = fruits.shift()

//Concatenates all the elements in an array into a string.
//let fruits = fruits.join(" ")

//Separates the characters of a string into an array. This one is a string method.
//let fruits = fruits.split(' ')

//What will the contents of the below arrays be after the code samples are executed? Come up with an answer yourself before testing it out in the console.

// var numbers = [2, 4, 6, 8]
// numbers.pop()
// numbers.push(10)
// numbers.unshift(3)

// return [3,2,4,6,10]

//What is the return value of the below code sample? Come up with an answer yourself before testing it out in the console.
// var morse = ["dot", "pause", "dot"]
// var moreMorse = morse.join(" dash ")
// moreMorse.split(" ")

// return ['dot', 'dash', 'pause', 'dash', 'dot']

//What will the contents of the below array be after the below code sample is executed? Come up with an answer yourself before testing it out in the console.

// var bands = []
// var beatles = ["Paul", "John", "George", "Pete", "beatles"]
// var stones = ["stones","Brian", "Mick", "Keith", "Ronnie", "Charlie"]
// bands.push(beatles)
// bands.unshift(stones)
// bands[bands.length - 1].pop()
// bands[0].shift()
// bands[1][3] = "Ringo"

//Booleans & Comparison Operators

// a	     b	   a AND b
// true	true	true
// true	false   false
// false	true	false
// false	false	false

// a	     b	   a OR b
// true	true	true
// true	false	true
// false	true	true
// false	false	false

// a	b	a != b
// 3	3	false
// 1	5	true
// 2	"2"	true

// a	      b	   !a AND (a OR b)
// true	true	false
// true	false	false
// false	true	true
// false	false	false

//conditions
// var age1 = prompt("type in your age");
// var age = parseInt(age1);
// if (age > 21) {
//   console.log("come on in!");
// } else if (18 < age > 21) {
//   console.log("Come on in (but no drinking)!");
// } else if (age < 18) {
//   console.log("You're too young to be in here!");
// } else if (age > 75) {
//   console.log("Are you sure you want to be here?");
// }

//bonus
//Data type should be boolean

// let counter = 0;
// while (counter < 100) {
//   if (counter % 3 == 0) {
//     console.log("Fizz");
//   } else if (counter % 5 == 0) {
//     console.log("Buzz");
//   } else if (counter % 5 == 0 && counter % 3 == 0) {
//     console.log("FizzBuzz");
//   } else {
//     console.log(counter);
//   }
//   counter++;
// }
