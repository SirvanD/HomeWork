// 1. transmogrifier
// Write a Javascript function called transmogrifier This function should accept
// three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result
// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// function transmogrifier(numbers) {}

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
//console.log(i);

// 3. lengths
// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of
// numbers where each number is the length of the corresponding string.

function length(strArr) {
  strArr.forEach(function (str) {
    return str.length;
  });
  return strArr;
}

// 4. sum of lengths
// using the sum and lengths function you wrote in the last 2 questions write code to work
// out the sum of the lengths of the following fruits array. display the result in the console.

var Arr = ["apple", "kiwi", "watermelon"];
var add = 0;
for (n = 0; n < Arr.length; n++) {
  add += Arr[index].length;
}
console.log(add);

// 5. Make Them Green
// Remember to write your assumptions if you feel the question is ambiguous.

// Create 3 boxes (divs) in an html file, give them a border of 1px solid black and a height and width of 100px, so you can see them.
// When you click on any box, it's background color should immediately become red.
// After every box has been clicked, change all of them immediately to green.

var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");

var allBoxes = document.querySelectorAll(".box");

function clickOnBox(event) {
  let userClickOnAnyBox = event.target;
  userClickOnAnyBox.style.backgroundColor = "red";
}

allBoxes.addEventListener("click", clickOnBox);
