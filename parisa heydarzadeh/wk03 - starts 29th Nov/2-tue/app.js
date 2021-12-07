// 1. transmogrifier
// Write a Javascript function called transmogrifier This function should accept
// three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result
// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

function transmogrifier(X, Y, Z) {
  return Math.pow(X * Y, Z);
}
transmogrifier(4, 3, 2);

//}

// 2. sum
// Write a function sum that accepts a single parameter as an argument, namely an array of numbers. The function should return the sum of all the numbers in the array

// sum([1,2,3,4]) // = 10

// function sum(Arr) {
//   let i = 0;
//   for (counter = 0; counter < Arr.length; counter++) {
//     let num = Arr[counter];
//     i = i + num;
//   }
//   return i;
// }
// console.log(sum([1, 2, 3]));

// 3. lengths
// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of
// numbers where each number is the length of the corresponding string.
// lengths(['my', 'cake', 'pudding']) // => [2,4,7]

// function lengths(Arr) {
//   let convertedArr = [];
//   for (i = 0; i < Arr.length; i++) {
//     convertedArr.push(Arr[i].length);
//   }
//   return convertedArr;
// }
// console.log(lengths(["apple", "kiwi"]));

// 4. sum of lengths
// using the sum and lengths function you wrote in the last 2 questions write code to work
// out the sum of the lengths of the following fruits array. display the result in the console.

var Arr = ["apple", "kiwi", "watermelon"];

let sum = 0;
for (i = 0; i < Arr.length; i++) {
  sum = sum + Arr[i].length;
}
console.log(sum);

// console.log(Arr["apple", "kiwi", "watermelon]));

// console.log(sumOfLength(["apple", "kiwi"]));

// 5. Make Them Green
// Remember to write your assumptions if you feel the question is ambiguous.

// Create 3 boxes (divs) in an html file, give them a border of 1px solid black and a height and width of 100px, so you can see them.
// When you click on any box, it's background color should immediately become red.
// After every box has been clicked, change all of them immediately to green.

// var box1 = document.querySelector(".box1");
// var box2 = document.querySelector(".box2");
// var box3 = document.querySelector(".box3");

// function clickOnBox(event) {
//   let userClickOnAnyBox = event.target;

//   userClickOnAnyBox.style.backgroundColor = "red";

//   if (
//     box1.style.backgroundColor == `red` &&
//     box2.style.backgroundColor == `red` &&
//     box3.style.backgroundColor == `red`
//   ) {
//     box1.style.backgroundColor = `green`;
//     box2.style.backgroundColor = `green`;
//     box3.style.backgroundColor = `green`;
//   }
// }

// box1.addEventListener("click", clickOnBox);
// box2.addEventListener("click", clickOnBox);
// box3.addEventListener("click", clickOnBox);
