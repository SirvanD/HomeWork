typeof 15
// Prediction: number
// Actual:number

typeof 5.5
// Prediction: number
// Actual:number

typeof NaN
// Prediction: number
// Actual:number

typeof "hello"
// Prediction: string
// Actual:string

typeof true
// Prediction: boolean
// Actual:boolean

typeof 1 != 2
// Prediction: boolean
// Actual:boolean


"hamburger" + "s"
// Prediction: "hamburgers"
// Actual:"hamburgers"

"hamburgers" - "s"
// Prediction: NaN
// Actual:NaN

"1" + "3"
// Prediction: "13"
// Actual:"13"

"1" - "3"
// Prediction: -2
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual:johnny5

"johnny" - 5
// Prediction: NaN
// Actual:NaN

99 * "luftbaloons"
// Prediction: NaN
// Actual:NaN

//ARRAY BUILT-INs
let exampleArray = ["1","2","3","4","5"];
// Add an element to the back of an array.
exampleArray.push("6");
console.log(exampleArray);

// Remove an element from the back of an array.
exampleArray.pop();
console.log(exampleArray);

// Add an element to the front of an array.
exampleArray.unshift("0");
console.log(exampleArray);

// Remove an element from the front of an array.
exampleArray.shift();
console.log(exampleArray);

// Concatenates all the elements in an array into a string.
console.log(exampleArray.join(''));

// Separates the characters of a string into an array. This one is a string method.
console.log(exampleArray.join('').split(''));

// What will the contents of the below arrays be after the code samples are executed? Come up with an answer yourself before testing it out in the console.
var numbers = [2, 4, 6, 8]
numbers.pop()
numbers.push(10)
numbers.unshift(3)

//answer
console.log([3,2,4,6,10]);

//What is the return value of the below code sample? Come up with an answer yourself before testing it out in the console.
var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ")
moreMorse.split(" ")

//answer
console.log(["dot", "dash", "pause",  "dash", "dot"]);

//What will the contents of the below array be after the below code sample is executed? Come up with an answer yourself before testing it out in the console.
var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles)
bands.unshift(stones)
bands[bands.length - 1].pop()
bands[0].shift()
bands[1][3] = "Ringo"

//answer
//bands[stones["Mick", "Keith", "Ronnie", "Charlie"], beatles["Paul", "John", "George", "Ringo"]]


//Boolean truth tables
// a	b	a AND b
// true	true	TRUE
// true	false	FALSE
// false	true	FALSE
// false	false	FALSE
//
// a	b	a OR b
// true	true	TRUE
// true	false	TRUE
// false	true	TRUE
// false	false	FALSE
//
// a	b	a != b
// 3	3	FALSE
// 1	5	TRUE
// 2	"2"	FALSE
//
// a	b	!a AND (a OR b)
// true	true	FALSE
// true	false	FALSE
// false	true	FALSE
// false	false	FALSE


// You're a bouncer at a bar. Given an age variable, create a conditional that satisfies the following requirements...
let patronAge = 18
let hasId = true;

//check first if they have ID
if (hasId==false){
    console.log("No ID, no entry.");
}
// If a patron is older than 21, print out "Come on in!".
else if(patronAge >21){
    console.log("Come on in!");
}
// If a patron is between 18 and 21, print out "Come on in (but no drinking)!".
else if(patronAge >=18 && patronAge <=21) {
    console.log("Come on in (but no drinking)!");
}
// If a patron is younger than 18, print out "You're too young to be in here!".
else if(patronAge <18) {
    console.log("You're too young to be in here!");
}
// If a patron is older than 75, print out "Are you sure you want to be here?".
else if(patronAge >=75) {
    console.log("Are you sure you want to be here?");
} 


// Counts from 1 to 100 and prints out something for each number.
// If the number is divisible by 3, print "Fizz".
// If the number is divisible by 5, print "Buzz".
// If the number is divisible by both 3 and 5, print "FizzBuzz".
// If the number does not meet any of the above conditions, just print the number.
let i = 0;

for(i=1; i<=100;i++){
    if (i%5==0 && i%3==0){
        console.log('FizzBuzz,');
    }
    else if(i%3==0){
        console.log('Fizz,');
    } else if (i%5==0){
        console.log('Buzz,');
    } else {
        console.log(i);
    }
}

//using a function and a loop to test it up to 100
function fizzBuzz(number){
    let value = number;
    if (number%5==0 && number%3==0){
        value = 'FizzBuzz,';
    }
    else if(number%3==0){
        value = 'Fizz,';
    } else if (number%5==0){
        value = 'Buzz,';
    }
    return value;
}
for(i=1;i<=100;i++){
   console.log(fizzBuzz(i));
}
