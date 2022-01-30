
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
// Prediction: boolean
// Actual: true


"hamburger" + "s"
// Prediction: hamburgerss
// Actual:hamburgerss

"hamburgers" - "s"
// Prediction: undefined
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual: 13

"1" - "3"
// Prediction: -2
// Actual: -2

"johnny" + 5
// Prediction: 'johnny5'
// Actual:'johnny5'

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "luftbaloons"
// Prediction: NaN
// Actual: NaN



// Javascript provides us with a number of native methods that allow us to interact with arrays. Find methods that do each of the following and provide an example...

// Add an element to the back of an array. 
array.push()
// Remove an element from the back of an array.
array.pop()
// Add an element to the front of an array.
array.unshift()
// Remove an element from the front of an array.
array.shift()
// Concatenates all the elements in an array into a string.
array.join()
// Separates the characters of a string into an array. This one is a string method.
string.split()



// What will the contents of the below arrays be after the code samples are executed? Come up with an answer yourself before testing it out in the console.

var numbers = [2, 4, 6, 8]
numbers.pop() //will remove the 8 from the array
numbers.push(10) // will put 10 on the back of the array
numbers.unshift(3) // will add 3 to the front of the array




// What is the return value of the below code sample? Come up with an answer yourself before testing it out in the console.

var morse = ["dot", "pause", "dot"] 
var moreMorse = morse.join(" dash ") // this will return the morse array turned into a string, with each part separated by a space, the word dash, and another space
moreMorse.split(" ") // this will return the moreMorse string as an array, with each element split between the spaces, so ['dot', 'dash', 'pause', 'dash', 'dot']





// What will the contents of the below array be after the below code sample is executed? Come up with an answer yourself before testing it out in the console.

var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles) //this will add the beatles array into the array bands, at the 0 index, so 0 will be an array of the beatles
bands.unshift(stones) //this will put the stones array at index 0 of bands
bands[bands.length - 1].pop() //remove the last item from the last index'd array of bands, so in this case remove pete from beatles? yes it did
bands[0].shift() // this will remove brian from the stones? yes it did 
bands[1][3] = "Ringo" // this will add ringo to the beatles, as there's nothing else in the 4th position in that array anymore after pushing it. 




// Fill out the truth tables below for `&&` (and), `||` (or) and one that uses multiple comparison operators. All you need to do is replace the `?`'s with either `true` or `false`.

// > **NOTE:** Because of markdown formatting, `||` and `&&` have been replaced with `OR` and `AND` respectively.
// >
// > **HINT:** With the last one, it may be helpful to add additional columns to the table for each individual comparison.

// | a | b | a AND b |
// | --- | --- | --- |
// | true | true | true |
// | true | false | false |
// | false | true | false |
// | false | false | false |

// |a|b|a OR b|
// |---|---|---|
// |true|true|true|
// |true|false|true|
// |false|true|true|
// |false|false|false|

// |a|b|a `!=` b|
// |---|---|---|
// |3|3|false|
// |1|5|true|
// |2|"2"|false|

// |a|b|!a AND (a OR b)|
// |---|---|---|
// |true|true|false|
// |true|false|false|
// |false|true|true|
// |false|false|false|


// ## Conditionals

// You're a bouncer at a bar. Given an `age` variable, create a conditional that satisfies the following requirements...
// * If a patron is older than `21`, print out `"Come on in!"`.
// * If a patron is between `18` and `21`, print out `"Come on in (but no drinking)!"`.
// * If a patron is younger than 18, print out `"You're too young to be in here!"`.
// * If a patron is older than 75, print out `"Are you sure you want to be here?"`.

//question unclear of whether 21 is included in first variable, like it actually is in america, so i just did it like that. someone is technically older than 21 the second after they "turn" 21. semantics sorry im tired
function entryToBar(hasId) {
    // var hasId = prompt(`Got id on you?`) //I realised after coding this that you were asking for a boolean so changed to be a function parameter
    if (hasId == false){
        console.log(`No ID, no entry.`)
    }else {
        var age = prompt(`How old are you?`);
        if (age > 75){
            console.log(`Are you sure you want to be here?`)
        }else if (age >= 21){
            console.log(`Come on in!`)
        }else if (age > 18){
            console.log(`Come on in (but no drinking!)`)
        }else {
            console.log(`You're too young to be in here!`)
        }
    }

}



// #### Bonus

// Bar patrons must have an ID if the bouncer is even going to consider what age they are.
// - If the patron has an ID, the bouncer will then check if they are of the proper age
// - If the patron does not have an ID, the bouncer will tell them `"No ID, no entry."`

// > Hint: Whether the patron has an ID or not can be stored in a `hasId` variable. What do you think the stored data type should be?

// ## Bonus: Fizz-Buzz

// Fizz-Buzz is a classic coding exercise that you can create using your knowledge of conditionals and loops. Implement code that does the following...
// * Counts from 1 to 100 and prints out something for each number.
// * If the number is divisible by 3, print `"Fizz"`.
// * If the number is divisible by 5, print `"Buzz"`.
// * If the number is divisible by both 3 and 5, print `"FizzBuzz"`.
// * If the number does not meet any of the above conditions, just print the number.

// Your output should look something like this...

// ```text
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...
// ```

// ```js
// // Your answer goes here.
// ```

// #### Bonus (for the bonus)

// * Encapsulate all of your logic into a function, so that each iteration of the game will trigger function calls that look something like these...

// ```js
// fizzBuzz(1)
// // => prints "1" to the console

// fizzBuzz(3)
// // => prints "Fizz" to the console

// fizzBuzz(15)
// // => prints "FizzBuzz" to the console

function fizzBuzz(num){
    if(num % 3 === 0 && num % 5 === 0){
        console.log(`FizzBuzz`);
    }else if(num % 3 ===  0){
        console.log(`Fizz`);
    }else if(num % 5 === 0){
        console.log(`Buzz`);
    }else {
        console.log(num)
    }
}


var counter = 1
while (counter <= 100){
    fizzBuzz(counter)
    counter++
}