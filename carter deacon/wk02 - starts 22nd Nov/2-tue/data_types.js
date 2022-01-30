typeof "potato"
// Prediction: string
// Actual: String

typeof 15
// Prediction: Number
// Actual: Number

typeof 5.5
// Prediction: Number
// Actual: Number

typeof NaN
// Prediction: Number
// Actual: number

typeof "hello"
// Prediction: string
// Actual: string

typeof true
// Prediction: boolean
// Actual: boolean

typeof 1 != 2
// Prediction: boolean
// Actual: boolean


"hamburger" + "s"
// Prediction: 'hamburgers'
// Actual:

"hamburgers" - "s"
// Prediction: 'hamburgers'
// Actual: NaN

"1" + "3"
// Prediction: '13'
// Actual:'13'

"1" - "3"
// Prediction: -2
// Actual: -2

"johnny" + 5
// Prediction: 'johnny5'
// Actual: 'johnny5'

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "luftbaloons"
// Prediction: NaN
// Actual: NaN

var numbers = [2, 4, 6, 8]
numbers.pop()
numbers.push(10)
numbers.unshift(3)
// Prediction after all 3 run numbers = [3, 2, 4, 6, 10]
// Answer: numbers = [3, 2, 4, 6, 10]

var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ")
moreMorse.split(" ")
// Predicted return value: ["dot", "dash", "pause", "dash", "dot"]
// Actual return value: ['dot', 'dash', 'pause', 'dash', 'dot']

var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles)
bands.unshift(stones)
bands[bands.length - 1].pop()
bands[0].shift()
bands[1][3] = "Ringo"
// Prediction: bands = [["Mick", "Keith", "Ronnie"],  ["Paul", "John", "George", "Ringo"]]

//BOOLEANS AND COMPARISONS

true && true 
// Prediction: true
// Actual: true

true && false
// Prediction: false
// Actual: false

false && true
// Prediction: false
// Actual: false

false && false 
// Prediction: false
// Actual: false

true OR true
// Prediction: true
// Actual: true

true OR false
// Prediction: true
// Actual: true

false OR true
// Prediction: true
// Actual: true

false OR false
// Prediction: false
// Actual: false

3 != 3 
// Prediction: false
// Actual: false

1 != 5
// Prediction: true
// Actual: true

2 != "2"
// Prediction: false
// Actual: false

!true && (true || true)
// Prediction: false
// Actual: false

!true && (true || false)
// Prediction: false
// Actual: false

!true && (false || true)
// Prediction: false
// Actual: false

!true && (false || false)
// Prediction: false
// Actual: false


// BOUNCER AGE CHECK
if (patronAge > 75) {
	console.log("Are you sure you want to be here?")
} else if (patronAge < 21 && patronAge >= 18) {
    console.log("Come on in (but no drinking)!")
} else if (patronAge < 18) {
    console.log("You're too young to be in here!")
} else {
    console.log("Come on in!")
}

// FIZZ BUZZ
for (let i = 0; i < 101; i++) {
	if (i % 3 == 0) {
		console.log("Fizz")
	} else if (i % 5 == 0) {
		console.log("Buzz")
	} else if (i % 3 == 0 && i % 5 == 0) {
		console.log("Fizzbuzz")
	} else {
		console.log(i)
	}
}