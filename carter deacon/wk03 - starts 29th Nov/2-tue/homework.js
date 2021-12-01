// 1. transmogrifier

// The example shows num1 x num2 x num3 and should be 144
function transmogrifier(num1, num2, num3) {
    // Could also do: return Math.pow((num1 * num2), num3);
    return (num1 * num2) ** num3;
}

// 2. sum
function sum(arr) {
    let total = 0;
    for (i=0; i<arr.length; i++) {
        total = arr[i] + total;
    }
    return total;
}

// 3. lengths
function lengths(arr) {
    let lengthArray = [];
    for (let i = 0; i < arr.length; i++) {
        lengthArray.push(arr[i].length);
    }
    return lengthArray;
}

// 4. sum of lengths
// Do I need to write a function for this?
var fruits = ['kiwi', 'apple', 'mango'];

sum(lengths(fruits));
// ^ this returns => 14

// 5. Make them green
// Create 3 boxes (divs) in an html file, give them a border of 1px solid black and a height and width of 100px, so you can see them.
// When you click on any box, it's background color should immediately become red.
// After every box has been clicked, change all of them immediately to green.

var allBoxes = document.querySelectorAll('.box');

for (let i = 0; i < allBoxes.length; i++) {
    allBoxes[i].addEventListener('click', handleClick);
}

var box1 = document.querySelectorAll('.box')[0];
var box2 = document.querySelectorAll('.box')[1];
var box3 = document.querySelectorAll('.box')[2];
var allRed = box1.style.backgroundColor == "red" && box2.style.backgroundColor == "red" && box3.style.backgroundColor == "red"; 

function handleClick(event) {
    var clickedOn = event.target;
    var allRed = box1.style.backgroundColor == "red" && box2.style.backgroundColor == "red";
    box3.style.backgroundColor == "red";
    clickedOn.style.backgroundColor = "red";
    if (allRed) {
        handleReset();
    }
}

// Seems to only do it with an "extra" click on all red circles. I tried changing this to a mouseup event so as soon as all circles were red, it reset but it still requires an extra click and I wasn't able to figure out why.
function handleReset() {
    box1.style.backgroundColor = "green";
    box2.style.backgroundColor = "green";
    box3.style.backgroundColor = "green";
}