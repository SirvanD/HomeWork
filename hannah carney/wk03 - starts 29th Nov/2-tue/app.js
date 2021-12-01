console.log('homework')



// Write a Javascript function called transmogrifier This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// function transmogrifier(number1, number2, number3) {
// let transmogrified = (number1*number2) ** number3;
// console.log(transmogrified)
// }
// transmogrifier()

// Write a function sum that accepts a single parameter as an argument, namely an array of numbers. The function should return the sum of all the numbers in the array

function arrayTotal(array) {
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return(sum);}


// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.


function length(array) {
    const lengthArray = array.map(element => element.length);
    console.log(lengthArray)
    return lengthArray
}


// using the sum and lengths function you wrote in the last 2 questions write code to work out the sum of the lengths of the following fruits array. display the result in the console.


var fruits = ['kiwi', 'apple', 'mango']

arrayTotal(length(fruits))

// Remember to write your assumptions if you feel the question is ambiguous.

// Create 3 boxes (divs) in an html file, give them a border of 1px solid black and a height and width of 100px, so you can see them.
// When you click on any box, it's background color should immediately become red.

var boxOne = document.querySelector('.box1')
var boxTwo = document.querySelector('.box2')
var boxThree = document.querySelector('.box3')


function redBox(event){
    console.log(event.target)
    var eventTarget = event.target;
        if(eventTarget.style.backgroundColor == '') {
        eventTarget.style.backgroundColor = 'red';
        if(boxOne.style.backgroundColor == 'red' && boxTwo.style.backgroundColor == 'red' && boxThree.style.backgroundColor == 'red') {
        boxOne.style.backgroundColor = 'green', boxTwo.style.backgroundColor = 'green', boxThree.style.backgroundColor = 'green';
         }
    }
}

console.log(boxOne)
console.log(boxTwo)
console.log(boxThree)


boxOne.addEventListener('click', redBox)
boxTwo.addEventListener('click', redBox)
boxThree.addEventListener('click', redBox)

// After every box has been clicked, change all of them immediately to green.
