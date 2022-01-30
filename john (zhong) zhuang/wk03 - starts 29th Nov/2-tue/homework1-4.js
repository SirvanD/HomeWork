// 1. transmogrifier
// Write a Javascript function called transmogrifier This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// transmogrified(4,3,2) // => 24

function transmogrifier(x, y, z) {
    return Math.pow(x * y, z)
}

// 2. sum
// Write a function sum that accepts a single parameter as an argument, namely an array of numbers. The function should return the sum of all the numbers in the array

// sum([1,2,3,4]) // = 10
function sum(array) {
    let i = 0;
    let total = 0;
    while (i < array.length) {
        total = array[i] + total
        i++;
    } return total;
}

// 3. lengths
// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// lengths(['my', 'cake', 'pudding']) // => [2,4,7]
// lengths(['now', 'I', 'know', 'my', 'ABC!']) // => [3,1,4,2,4]

function lengths(array) {
    let i = 0;
    let newArray = [];
    while (i < array.length) {
        newArray[i] = array[i].length;
        i++;
    } return newArray;
}


// 4. sum of lengths
// using the sum and lengths function you wrote in the last 2 questions write code to work out the sum of the lengths of the following fruits array. display the result in the console.

// var fruits = ['kiwi', 'apple', 'mango']
// your code should print 14

var fruits = ['kiwi', 'apple', 'mango'];
function sumOfLengths(array) {
    return sum(lengths(array));
};
console.log(sumOfLengths(fruits));