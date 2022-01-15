// Write a function named onlyEven that returns evens numbers in an array. Write one version that use forEach and then write another version that uses filter

function onlyEven(numbers) {
    let evenNumbers = [];
    numbers.forEach(number => {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    })
    return evenNumbers;
}

function onlyEven(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

// countIntegers – counts how many integers there are in an array

function countIntegers(numbers) {
    let intCounter = 0;
    numbers.forEach(number => {
        if (Number.isInteger(number)) {
            intCounter ++;
        }
    })
    return intCounter;
}

function countIntegers(numbers) {
    return numbers
        .filter(number => Number.isInteger(number))
        .length;
}

// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string. use .map

function lengths(strings) {
    return strings.map(string => string.length);
}

// getSquares – takes in an array of numbers and returns an array of their squares. If you want more practice write one version using .forEach and then write another version using .map

function getSquares(numbers) {
    return numbers.map(number => number * number);
}

// Write an expression using array iterator methods (like filter and reduce) to compute the total value of the machines in the inventory array. Use arrow functions.

var inventory = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
]


let totalMachineValue = inventory
    .filter(item => item.type === "machine")
    .map(machine => machine.value)
    .reduce((total, value) => total + value, 0)

console.log(totalMachineValue);

// Get an array of all the machines with value over 500
let expensiveMachines = inventory
    .filter(item => item.type === "machine" && item.value > 500)

console.log(expensiveMachines);