// Question 1
typeof 15
// Prediction: number
// Actual: number

typeof 5.5
// Prediction: number
// Actual: number

typeof NaN
// Prediction: number
// Actual: number

typeof "hello"
// Prediction: string
// Actual: string

typeof true
// Prediction: boolean
// Actual: boolean

typeof 1 != 2
// Prediction: true
// Actual: true


"hamburger" + "s"
// Prediction: hamburgers
// Actual:hamburgers

"hamburgers" - "s"
// Prediction: hamburgers s
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual: 13

"1" - "3"
// Prediction: -2
// Actual: -2

"johnny" + 5
// Prediction: NaN
// Actual: Johnny5

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "luftbaloons"
// Prediction: NaN
// Actual: NaN


// Add an element to the back of an array.
// .push();
// Remove an element from the back of an array.
// .pop();
// Add an element to the front of an array.
// .unshift();
// Remove an element from the front of an array.
// shift();
// Concatenates all the elements in an array into a string.
// concat();
// Separates the characters of a string into an array. This one is a string method.
// split();

var numbers = [2, 4, 6, 8]
numbers.pop()
numbers.push(10)
numbers.unshift(3)
// 5

var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ")
moreMorse.split(" ")
// ['dot', 'dash', 'pause', 'dash', 'dot']

var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles)
bands.unshift(stones)
bands[bands.length - 1].pop()
bands[0].shift()
bands[1][3] = "Ringo"

//Ringo

