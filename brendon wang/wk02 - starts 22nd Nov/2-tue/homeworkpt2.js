//data types

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
// Prediction:boolean
// Actual: boolean

typeof 1 != 2
// Prediction:true boolean
// Actual: true


"hamburger" + "s"
// Prediction: string
// Actual: strings

"hamburgers" - "s"
// Prediction: string
// Actual: NaN

"1" + "3"
// Prediction:string
// Actual: string3

"1" - "3"
// Prediction: number
// Actual: NaN

"johnny" + 5
// Prediction: string
// Actual: string5

"johnny" - 5
// Prediction: undefined
// Actual: NaN

99 * "luftbaloons"
// Prediction: undefined
// Actual: NaN

// arrays
var numbers = [2, 4, 6, 8]
// Add an element to the back of an array. 
numbers.push(10)
// Remove an element from the back of an array.
numbers.pop()
// Add an element to the front of an array.
numbers.unshift(0)
// Remove an element from the front of an array.
numbers.shift()
// Concatenates all the elements in an array into a string.
numbers.join(" ")
// Separates the characters of a string into an array. This one is a string method.
numbers.join(" ").split(" ")

var numbers = [2, 4, 6, 8]
numbers.pop()
numbers.push(10)
numbers.unshift(3)

numbers = [3, 2, 4, 6, 10]

var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ")
moreMorse.split(" ")

morse = [ "dot", "dash", "pause", "dash", "dot"]



var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles) 
bands.unshift(stones)
// bands = [ {stones}, {beatles}]
bands[bands.length - 1].pop()
// bands.beatles.pop() = remove pete
bands[0].shift()
// bands.stones.shift = remove brian
bands[1][3] = "Ringo"
// bands.stones[3] = Ringo (add Ringo)

bands = [ {stones: "Mick", "Keith", "Ronnie", "Charlie"}, {beatles: "Paul", "John", "George", "Ringo"}]

//Booleans & Comparisons Operators

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

// Conditionals

function checkAge(age){
    if (age > 21){
        return "Come on in!"
    } else if (age <21 && age > 18) {
        return "Come on in but not drinking!"
    } else if (age <18) {
        return "youre too young to be in here!"
    } else if (age > 75) {
        return "are you sure you want to be here?"
    } else {
        return "welcome then"
    }
}

// bonus

function checkAgeWithID(age, hasID){
    if (hasID == true){
        if (age > 21){
            return "Come on in!"
        } else if (age <21 && age > 18) {
            return "Come on in but not drinking!"
        } else if (age <18) {
            return "youre too young to be in here!"
        } else if (age > 75) {
            return "are you sure you want to be here?"
        } else {
            return "welcome then"
        }
    } else {
        return "no ID, no entry"
    }
}

// Fizz-Buzz

index = 0
while (index <= 100){
    if (index % 3 == "0"){
        if (index % 5 == "0"){
            console.log("fizzbuzz")
        } else {
            console.log("Fizz")
        }
    } else if (index % 5 == "0") {
        console.log("Buzz")
    } else {
        console.log( index)
    }
    index++ 
}