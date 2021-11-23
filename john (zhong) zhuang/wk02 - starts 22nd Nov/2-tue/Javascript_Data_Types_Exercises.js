// Data Types
// For each expression, predict what you think the output will be in a comment (//) without first running the command. Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
// Example
// typeof "potato"
// // Prediction: Vegetable
// // Actual: String
What is the output of each of the expressions below ?
    typeof 15
// Prediction: number
// Actual:number

typeof 5.5
// Prediction:number
// Actual:number

typeof NaN
// Prediction:number
// Actual:number

typeof "hello"
// Prediction:string
// Actual:string

typeof true
// Prediction:boolean
// Actual:boolean

typeof 1 != 2
// Prediction: boolean
// Actual:true


"hamburger" + "s"
// Prediction: string
// Actual:strings

"hamburgers" - "s"
// Prediction: strings
// Actual:NaN

"1" + "3"
// Prediction:strings
// Actual:string3

"1" - "3"
// Prediction:NaN
// Actual:NaN

"johnny" + 5
// Prediction:strings
// Actual:string5

"johnny" - 5
// Prediction:NaN
// Actual:NaN

99 * "luftbaloons"
// Prediction:NaN
// Actual:NaN

// =====================

// Arrays
// Javascript provides us with a number of native methods that allow us to interact with arrays. Find methods that do each of the following and provide an example...
let arr1 = ['apple', 'orange', 'kiwi', 'grape', 'pineapple'];
let arr2 = ['BMW', "Ford", 'Toyota', 'Honda', 'Mazda'];


// Add an element to the back of an array.
arr1.push('pear');
console.log(arr1);

// Remove an element from the back of an array.
arr2.pop();
console.log(arr2);
// Add an element to the front of an array.
let newArr = arr1.unshift('banana');
// Remove an element from the front of an array.
arr2.shift();
console.log(arr2);
// Concatenates all the elements in an array into a string.
let newArr = arr1.concat(arr2);
// Separates the characters of a string into an array. This one is a string method.
let newArr = "This is an array".split(' ');



// What will the contents of the below arrays be after the code samples are executed? Come up with an answer yourself before testing it out in the console.
var numbers = [2, 4, 6, 8]
numbers.pop()
numbers.push(10)
numbers.unshift(3)
//[3,2,4,6,10]

// What is the return value of the below code sample? Come up with an answer yourself before testing it out in the console.

var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ") // 'dot dash pause dash dot'
moreMorse.split(" ")
//["dot","dash","pause","dash","dot"]

// What will the contents of the below array be after the below code sample is executed? Come up with an answer yourself before testing it out in the console.

var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles) // band is [["Paul", "John", "George", "Pete"]] now
bands.unshift(stones) // bands is [['Brian', 'Mick', 'Keith', 'Ronnie', 'Charlie'],['Paul', 'John', 'George', 'Pete']] now
bands[bands.length - 1].pop() //band is [['Brian', 'Mick', 'Keith', 'Ronnie', 'Charlie'],['Paul', 'John', 'George']] now
bands[0].shift() //band is [['Mick', 'Keith', 'Ronnie', 'Charlie'],['Paul', 'John', 'George']] now
bands[1][3] = "Ringo" //band is [['Mick', 'Keith', 'Ronnie', 'Charlie'],['Paul', 'John', 'George','Ringo']] now

    // ## Booleans & Comparison Operators

    // Here's an example truth table for the `!` (not) operation. In it, we're listing the values of `!a` that correspond with a given value of `a`.

    | a | !a |
| ---| ---|
| true | false |
| false | true |

    // Fill out the truth tables below for `&&` (and), `||` (or) and one that uses multiple comparison operators. All you need to do is replace the `?`'s with either `true` or `false`.

    // > **NOTE:** Because of markdown formatting, `||` and `&&` have been replaced with `OR` and `AND` respectively.
    // >
    // > **HINT:** With the last one, it may be helpful to add additional columns to the table for each individual comparison.

    a = true, b = true, a && b = true
a = true, b = true, a && b = false
a = false, b = true, a && b = false
a = false, b = false, a && b = false


a = true, b = true, a || b = true
a = true, b = false, a || b = true
a = false, b = true, a || b = true
a = false, b = false, a || b = false


a = 3, b = 3, a`!=` b = false
a = 1, b = 5, a`!=` b = true
a = 2, b = "2", a`!=` b = true


a = true, b = true, a && (a || b) = true
a = true, b = false, a && (a || b) = true
a = false, b = true, a && (a || b) = false
a = false, b = false, a && (a || b) = false


// Conditionals
// You're a bouncer at a bar. Given an age variable, create a conditional that satisfies the following requirements...

// If a patron is older than 21, print out "Come on in!".
// If a patron is between 18 and 21, print out "Come on in (but no drinking)!".
// If a patron is younger than 18, print out "You're too young to be in here!".
// If a patron is older than 75, print out "Are you sure you want to be here?".

function barAge(age) {
    if (age >= 21) {
        return ('Come on in!')
    } else if (age >= 18 && age < 21) {
        return ('Come on in (but no drinking)!')
    } else if (age < 18) {
        return (`You're too young to be in here!`)
    } else if (age > 75) {
        return ('Are you sure you want to be here?')
    }
}
console.log(barAge(age));

// Bar patrons must have an ID if the bouncer is even going to consider what age they are.

// If the patron has an ID, the bouncer will then check if they are of the proper age
// If the patron does not have an ID, the bouncer will tell them "No ID, no entry."
// Hint: Whether the patron has an ID or not can be stored in a hasId variable. What do you think the stored data type should be?

function barAge(hasID, age) {
    if (hasID == false) {
        return ('No ID, no entry!')
    } else {
        if (age >= 21) {
            return ('Come on in!')
        } else if (age >= 18 && age < 21) {
            return ('Come on in (but no drinking)!')
        } else if (age < 18) {
            return (`You're too young to be in here!`)
        } else if (age > 75) {
            return ('Are you sure you want to be here?')
        }
    }
}
console.log(barAge(age));



// Bonus: Fizz-Buzz
// Fizz-Buzz is a classic coding exercise that you can create using your knowledge of conditionals and loops. Implement code that does the following...

// Counts from 1 to 100 and prints out something for each number.
// If the number is divisible by 3, print "Fizz".
// If the number is divisible by 5, print "Buzz".
// If the number is divisible by both 3 and 5, print "FizzBuzz".
// If the number does not meet any of the above conditions, just print the number.
// Your output should look something like this...

// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...

let arr1 = Array();
let i = 1;
while (i < 101) {
    arr1.push(i);
    i++;
}
let arr2 = arr1;
let index = 0;
while (index < 100) {
    if (arr2[index] % 15 == 0) {
        arr2[index] = 'FizzBuzz';
    } else if (arr2[index] % 3 == 0) {
        arr2[index] = 'Fizz'
    } else if (arr2[index] % 5 == 0) {
        arr2[index] = 'Buzz'
    } else { arr2[index] = arr2[index] }
    index++;
}
console.log(arr2);


// Bonus (for the bonus)
// Encapsulate all of your logic into a function, so that each iteration of the game will trigger function calls that look something like these...
// fizzBuzz(1)
// // => prints "1" to the console

// fizzBuzz(3)
// // => prints "Fizz" to the console

// fizzBuzz(15)
// // => prints "FizzBuzz" to the console

function fizzBuzz(num) {
    let arr1 = Array();
    let i = 1;
    while (i < 101) {
        arr1.push(i);
        i++;
    }
    let arr2 = arr1;
    let index = 0;
    while (index < 100) {
        if (arr2[index] % 15 == 0) {
            arr2[index] = 'FizzBuzz';
        } else if (arr2[index] % 3 == 0) {
            arr2[index] = 'Fizz'
        } else if (arr2[index] % 5 == 0) {
            arr2[index] = 'Buzz'
        } else { arr2[index] = arr2[index] }
        index++;
    }
    return arr2[num - 1];
}