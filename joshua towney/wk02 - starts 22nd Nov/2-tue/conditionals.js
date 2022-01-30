// You're a bouncer at a bar. Given an age variable, create a conditional that satisfies the following requirements...

// If a patron is older than 21, print out "Come on in!".
// If a patron is between 18 and 21, print out "Come on in (but no drinking)!".
// If a patron is younger than 18, print out "You're too young to be in here!".
// If a patron is older than 75, print out "Are you sure you want to be here?".

// Bonus
// Bar patrons must have an ID if the bouncer is even going to consider what age they are.

// If the patron has an ID, the bouncer will then check if they are of the proper age
// If the patron does not have an ID, the bouncer will tell them "No ID, no entry."
// Hint: Whether the patron has an ID or not can be stored in a hasId variable. What do you think the stored data type should be?

var patronAge = 76;
var hasId = false;


    if (hasId == false) {
        console.log('No ID, no entry');
    } else if (patronAge > 75) {
            console.log("Are you sure you want to be here?");
    } else if (patronAge < 76 && patronAge > 21) {
        console.log("Come on in!");
    } else if (patronAge >= 18) {
        console.log("Come on in (but no drinking");
    } else {
        console.log("You're too young to be in here");
    } 


// Bonus: Fizz-Buzz
// Fizz-Buzz is a classic coding exercise that you can create using your knowledge of conditionals and loops. Implement code that does the following...

// Counts from 1 to 100 and prints out something for each number.
// If the number is divisible by 3, print "Fizz".
// If the number is divisible by 5, print "Buzz".
// If the number is divisible by both 3 and 5, print "FizzBuzz".
// If the number does not meet any of the above conditions, just print the number.
// Your output should look something like this...

// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...


// var i = 1;

// while (i < 101) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         //can also be written as (i % 15 == 0) as 3 x 5 is 15 so all numbers need t be divided by it. 
//         console.log('FizzBuzz');
//     } else if (i % 5 == 0) {
//         console.log('Buzz');
//     } else if (i % 3 == 0) {
//         console.log('Fizz');
//     } else
//     console.log(i);
//     i++
// }

// I did attempt this one but ended up reading up about a solution. Makes a lot of sense to me Now


// Bonus (for the bonus)
// Encapsulate all of your logic into a function, so that each iteration of the game will trigger function calls that look something like these...
// fizzBuzz(1)
// // => prints "1" to the console

// fizzBuzz(3)
// // => prints "Fizz" to the console

// fizzBuzz(15)
// // => prints "FizzBuzz" to the console