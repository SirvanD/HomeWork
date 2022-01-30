console.log('its a me')
// Write a function sum that accepts a single parameter as an argument, namely an array of numbers. The function should return the sum of all the numbers in the array

// sum([1,2,3,4]) // = 10

// var numbers = [1,2,3,4,5,6,7,8,9]
var i = 0;
var total = 0;

function sum(numbers) {

    while (i < numbers.length) {
        total = total + numbers[i];
        i++;
    } 
    return total;
}