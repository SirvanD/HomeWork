// 1. transmogrifier
// Write a Javascript function called transmogrifier This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// transmogrified(4,3,2) // => 144

function transmogrifier(a, b, c) {
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        return ((a * b) ** c);
    }
}
transmogrifier(4, 3, 2);
// 2. sum
// Write a function sum that accepts a single parameter as an argument, namely an array of numbers. The function should return the sum of all the numbers in the array

// sum([1,2,3,4]) // = 10
var arr = [1, 2, 3, 4]
function sum(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (sum);
}
sum(arr);

// 3. lengths
// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// lengths(['my', 'cake', 'pudding']) // => [2,4,7]
// lengths(['now', 'I', 'know', 'my', 'ABC!']) // => [3,1,4,2,4]

var arrr = ['my', 'cake', 'pudding', 'abc']
function length(arr) {
    var newArr = [];
    arr.forEach(element => {
        newArr.push(element.length)
    });
    return (newArr)
}

length(arrr);
// 4. sum of lengths
// using the sum and lengths function you wrote in the last 2 questions write code to work out the sum of the lengths of the following fruits array. display the result in the console.

// var fruits = ['kiwi', 'apple', 'mango']
// your code should print 14



// version one below works too
// function sumOfLengths(arr) {
//     var newArr = [];
//     arr.forEach(element => {
//         newArr.push(element.length)
//     });
//     var sum = 0;
//     for (let i = 0; i < newArr.length; i++) {
//         sum += newArr[i];
//     }
//     console.log(sum);
// }

// sumOfLengths(fruits);

// function sumOfLengths(arr) {
//     var sumLength = 0;
//     arr.forEach(element => {
//         sumLength = sumLength + element.length
//     });
//     console.log(sumLength);
// }
var fruits = ['kiwi', 'apple', 'mango']
function sumOfLengths(arr) {
    return sum(length(arr));
}
sumOfLengths(fruits);
// 5. Make Them Green
// Remember to write your assumptions if you feel the question is ambiguous.

// Create 3 boxes (divs) in an html file, give them a border of 1px solid black and a height and width of 100px, so you can see them.
// When you click on any box, it's background color should immediately become red.
// After every box has been clicked, change all of them immediately to green.

var allBoxes = document.querySelectorAll('div')

function changeColor(event) {
    var box = event.target;
    box.style.backgroundColor = "red";
    if (allBoxes[0].style.backgroundColor == "red" && allBoxes[1].style.backgroundColor == "red" && allBoxes[2].style.backgroundColor == "red") {
        allBoxes.forEach(element => element.style.backgroundColor = "green");
    }
}


allBoxes.forEach(element => { element.addEventListener('click', changeColor) });