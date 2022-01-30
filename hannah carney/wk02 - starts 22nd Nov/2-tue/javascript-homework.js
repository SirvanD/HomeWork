// Part 1

typeof 15
// Prediction: number
// Actual: 'number'

typeof 5.5
// Prediction: number
// Actual: number

typeof NaN
// Prediction: string?
// Actual: number

typeof "hello"
// Prediction: string
// Actual: string

typeof true
// Prediction: boolean
// Actual: boolean

typeof 1 != 2
// Prediction: 1 
// Actual: true


"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: hamburger 
// Actual: NaN

"1" + "3"
// Prediction: 4
// Actual: 14

"1" - "3"
// Prediction: 2
// Actual: -2

"johnny" + 5
// Prediction: johnny "5"
// Actual: johnny5

"johnny" - 5
// Prediction: undefined
// Actual: NaN

99 * "luftbaloons"
// Prediction: undefined
// Actual: NaN


// Part 2
var array = ['hannah', 'banana', 'fee', 'fi', 'fo'];

// Add an element to the back of an array.
array.push =([4]);

// Remove an element from the back of an array.
array.pop([4]);

// Add an element to the front of an array.
array.unshift('shifty')

// Remove an element from the front of an array.
array.shift([0]);

// Concatenates all the elements in an array into a string.
array.join(' ');

// Separates the characters of a string into an array. This one is a string method.
'hannah banana fee fi fo'.split();

// Part 3

// What will the contents of the below arrays be after the code samples are executed? Come up with an answer yourself before testing it out in the console

var numbers = [2, 4, 6, 8]
numbers.pop()
// Removes the last numbers
// Update: it showed the last number - so I was right

numbers.push(10)
// It will add 10 to the array 
// Returns 4, which is the new length of the array

numbers.unshift(3)
// It would return 8?
// It returned 5? Wtf? 

// Part 4

// What is the return value of the below code sample? Come up with an answer yourself before testing it out in the console.
// var morse = ["dot", "pause", "dot"]

// var moreMorse = morse.join(" dash ")
// // Returns the array as a string with the word dash seperating the words

// moreMorse.split(" ")
// Makes the above string a new array


// What will the contents of the below array be after the below code sample is executed? Come up with an answer yourself before testing it out in the console.

// var bands = []
// var beatles = ["Paul", "John", "George", "Pete"]
// var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]

// bands.push(beatles)
// bands.unshift(stones)
// bands[bands.length - 1].pop()
// bands[0].shift()
// bands[1][3] = "Ringo"

// So this will log the length of the array + 1, then it will add length to the array again using unshift (to the front?)
// Then bands[0-1].pop will add 1 to the bands array? Then bands 0 index position, minus that index? 
// Then lastly it'll change 


//  ATTENTION WHOEVER IS MARKING THIS: I'm exhausted and really need to go to bed, I will finish the rest of this tomorrow. And also need clarification on the below bc I'm confused. Probably just really tired though. Trying really hard! 


//  Part 5

// Booleans & Comparison Operators: you need to complete the logic tables e.g. a is true, b is true, so a AND b is true. In other words AND operations are only true if both a and b is true.
// Conditionals: you've got to write an if statement & else-ifs that will satisfy the comments at the start of the question.

// a	b	    a AND b
// true	true	true 
// true	false	false
// false true	false
// false false	true

// a	b	    a OR b
// true	true	true
// true	false	true
// false true	true
// false false	true

// a	b	    a!= b
// 3	3	      false
// 1	5	      true
// 2	"2"	      true

// a	    b	     !a AND (a OR b)
// true	    true	        false
// true	    false	        false
// false	true	        false
// false	false	        true

// You're a bouncer at a bar. Given an age variable, create a conditional that satisfies the following requirements...

// If a patron is older than 21, print out "Come on in!".
// If a patron is between 18 and 21, print out "Come on in (but no drinking)!".
// If a patron is younger than 18, print out "You're too young to be in here!".
// If a patron is older than 75, print out "Are you sure you want to be here?".

function clubEntry (age) { 
if (age < 18) {
    console.log('You/re too young to be in here'); 
} else if (age > 21 ) {
    console.log('Come on in!'); 
} else if (age > 18 && age < 21) {
    console.log('Come on in, but no drinking');
} else if (age > 75) {
    console.log('Are you sure you want to be in here? ');
} else {
    console.log('No ID, no entry');
    }
}
