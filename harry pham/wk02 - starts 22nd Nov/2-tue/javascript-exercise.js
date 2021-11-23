// //Data Types
// typeof 15
// // Prediction:number
// // Actual:

// typeof 5.5
// // Prediction:number
// // Actual:

// typeof NaN
// // Prediction:number
// // Actual:

// typeof "hello"
// // Prediction:string
// // Actual:

// typeof true
// // Prediction:boolean
// // Actual:

// typeof 1 != 2
// // Prediction:true
// // Actual:


// "hamburger" + "s"
// // Prediction:string
// // Actual:

// "hamburgers" - "s"
// // Prediction:NaN
// // Actual:

// "1" + "3"
// // Prediction:string
// // Actual:

// "1" - "3"
// // Prediction:NaN
// // Actual:

// "johnny" + 5
// // Prediction:string
// // Actual:

// "johnny" - 5
// // Prediction:NaN
// // Actual:

// 99 * "luftbaloons"
// // Prediction:NaN
// // Actual:

// Arrays
// //push
// //pop
// //unshift
// //shift
// //concat
// //split

// var numbers = [2, 4, 6, 8]
// numbers.pop()
// numbers.push(10)
// numbers.unshift(3)

// //the number 8 in the array will be deleted
// //number 10 will be created to the back of the array
// //number 3 will appear as the first element in the array

// var morse = ["dot", "pause", "dot"]
// var moreMorse = morse.join(" dash ")
// moreMorse.split(" ")

// //create a new string where between each of the string in the array will have the word dash in it

// // What will the contents of the below array be after the below code sample is executed? Come up with an answer yourself before testing it out in the console.

// var bands = []
// var beatles = ["Paul", "John", "George", "Pete"]
// var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
// bands.push(beatles)
// bands.unshift(stones)
// bands[bands.length - 1].pop()
// bands[0].shift()
// bands[1][3] = "Ringo"

// //the array bands will have the array beatles in it
// //in the array bands, the first element in the array will be the array stones
// //in the array bands, the string pete will be removed
// //in the array bands, the string Brian will be removed
// // the array beatles in band, a new string named ringo will be made

// //Booleans & comparison operators

// a	b	a AND b
// true	true	true
// true	false	false
// false	true	false
// false	false	true
// a	b	a OR b
// true	true	true
// true	false	true
// false	true	false
// false	false	false
// a	b	a != b
// 3	3	false
// 1	5	true
// 2	"2"	true
// a	b	!a AND (a OR b)
// true	true	false
// true	false	false
// false	true	false
// false	false	true

// // If a patron is older than 21, print out "Come on in!".
// // If a patron is between 18 and 21, print out "Come on in (but no drinking)!".
// // If a patron is younger than 18, print out "You're too young to be in here!".
// // If a patron is older than 75, print out "Are you sure you want to be here?".

// if(userID == true){
//     if(patron > 21){
//         console.log("come on in !")
//     } else if (patron >= 18 && patron <= 21){
//         console.log("come on in, but no drinking!")
//     } else if (patron < 18){
//         console.log("you're too young!")
//     } else if (patron > 75){
//         console.log("are you sure you want to be here?")
//     }
// }

counter = 1 
function buzzIt(){
while(counter <= 100){
    if(counter % 3 == 0){
        console.log("Fizz")
    } else if (counter % 5 == 0){
        console.log("Buzz")
    } else if (counter % 5 == 0 && counter % 3 ==0){
        console.log("FizzBuzz!")
    } else {
        console.log(counter)
    }
    counter++;
}
}