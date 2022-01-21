// Javascript provides us with a number of native methods that allow us to interact with arrays. Find methods that do each of the following and provide an example...

// Add an element to the back of an array.
// Remove an element from the back of an array.
// Add an element to the front of an array.
// Remove an element from the front of an array.
// Concatenates all the elements in an array into a string.
// Separates the characters of a string into an array. This one is a string method.
// This is a great exercise for practicing your "Google Fu"! If you need a starting point, check out MDN's documentation page on arrays.

// add element to back of array
var fruit = ['banana','pear','apple','mango'];
fruit.push('cherry');
//remove element from back of array
var vegies = ['celery','potato','onion','pumkin'];
vegies.pop();
//add element to start of array
var sweets = ['chocolate','cake','pudding','licorice'];
sweets.unshift('strawberry');
//remove element from start of array
var dairy = ['cheese','milk','yoghurt','cream'];
dairy.shift();
//concatenate elements of an array into a string
var meat = ['beef','chicken','ham','turkey'];
meat.join(' ');
//separate elements of a string into an array
var breakfast = "eggs bacon sausages hashbrown";
breakfast.split(' ');

// What will the contents of the below arrays be after the code samples are executed? Come up with an answer yourself before testing it out in the console.

// var numbers = [2, 4, 6, 8]
// numbers.pop()
//     var numbers = [2, 4, 6]
// // numbers.push(10)
//     var numbers = [2, 4, 6, 8, 10]
// // numbers.unshift(3)
//     var numbers = [3, 2, 4, 6, 8]

// What is the return value of the below code sample? Come up with an answer yourself before testing it out in the console.

var morse = ["dot", "pause", "dot"];
var moreMorse = morse.join(" dash ");
// moreMorse.split(" ")

// ['dot', 'dash', 'pause', 'dash', 'dot']
// original guess ^^^^^^ also the correct answer


// What will the contents of the below array be after the below code sample is executed? Come up with an answer yourself before testing it out in the console.

var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles)
bands.unshift(stones)
bands[bands.length - 1].pop()
bands[0].shift()
bands[1][3] = "Ringo"

// var bands = ["Ringo"]
// var beatles = ["Paul", "John", "George", "Pete"]
// var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]

//original guess ^^^^^^^

// Actual answer - bands gets made empty by bands[0].shift
//               - "Ringo" replaces "Pete" with bands[1][3] = "Ringo"

// this one threw me as it was not layed out in an object such as:

// var faveBands = {
//     bands: [],
//     beatles: ["Paul", "John", "George", "Pete"],
//     stones: ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
// }