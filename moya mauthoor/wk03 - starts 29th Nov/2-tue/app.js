// 1. Transmogrifier
// Hey DT and Kasun, the example answer for this one (24) seemed to be incorrect based on what the question asked for. 
function transmogrifier(num1, num2, num3) {
    return (num1 * num2) ** num3;
}

// 2. Sum
function sum(numbers) {
    let sumOfNums = 0;
    numbers.forEach(function(number) {
        sumOfNums += number;
    });
    return sumOfNums;
}

// 3. Lengths
function lengths(strings) {
    let stringLengths = [];
    strings.forEach(function(string){
        stringLengths.push(string.length);
    });
    return stringLengths;
}

// 4. Sum of lengths
function sumOfLengths(array) {
    let stringLengths = lengths(array);
    let sumOfStringLengths = sum(stringLengths);
    return sumOfStringLengths;
}

// 5. Make them green
// Please see index.html file for the stunning green boxes :)
// I included my CSS in the index.html file just for simplicity. 
// I worked on the assumption that as soon as the final box was clicked, all boxes would instantly be turned green (i.e. there would be no programmed delay between the colour change in the final box from red to green.)
// This solution feels a bit excessive, with the multiple functions and the array of booleans to check if all boxes have been clicked. Would love to know if there's a simpler way to achieve this. 

let boxes = document.querySelectorAll(".box");

function handleClick(event) {
    let clickedBox = event.target;
    clickedBox.classList.add("clicked-box");
    areAllBoxesClicked();
}

function areAllBoxesClicked() {
    let clickedBoxes = document.querySelectorAll(".clicked-box");
    if (clickedBoxes.length === boxes.length) {
        turnGreen();
    }
    // My original code before Kasun told me querySelectorAll could be used:
    // let isBoxClicked = [];
    // boxes.forEach(function(box) {
    //     isBoxClicked.push(box.classList.contains("clicked-box"));
    // });
    // if (isBoxClicked.includes(false) === false) {
    //     turnGreen();
    // }
}

function turnGreen() {
    boxes.forEach(function(box) {
        box.style.backgroundColor = "green";
    });
}

boxes.forEach(function(box) {
    box.addEventListener("click", handleClick);
});
