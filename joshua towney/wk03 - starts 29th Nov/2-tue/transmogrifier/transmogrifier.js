// 1. transmogrifier
// Write a Javascript function called transmogrifier This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// transmogrified(4,3,2) // => 24

function transmogrifier (inputOne, inputTwo, inputThree) {
    var product = inputOne * inputTwo;
    return Math.pow(product,inputThree);
}