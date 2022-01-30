// JavaScript Iterators


// .forEach() and .filter()
// Write a function named onlyEven that returns evens numbers in an array. Write one version that use forEach and then write another version that uses filter

//forEach  
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function onlyEven(numbers) {
    const evenNumbers = [];

    numbers.forEach(number => {
    if (number % 2 === 0) {
        evenNumbers.push(number);
        }
    });
    return(evenNumbers)
}

//filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(number => {
  return number % 2 === 0;
});

console.log(evenNumbers);


// .forEach() or .filter()

// countIntegers – counts how many integers there are in an array

var countIntegers = numbers.filter(function(numbers) {
    return (Number.isInteger(numbers));
  });
  
//   console.log(countIntegers);


// .map() oldie but goodie
// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string. use .map

function lengths(arr){
    return arr.map(function(str){
        return str.length;
    });
}


// getSquares – takes in an array of numbers and returns an array of their squares. If you want more practice write one version using .forEach and then write another version using .map
// getSquares([1, 2, 3, 4, 5]) // => [1, 4, 9, 16, 25]
function getSquares (arr) {
    return arr.map(function (roots) {
      return Math.pow(roots, 2);
    });
}

// .map(), .filter() & .reduce()

// Write an expression using array iterator methods (like filter and reduce) to compute the total value of the machines in the inventory array. Use arrow functions.

var inventory = [
  {type:   "machine", value: 5000},
  {type:   "machine", value:  650},
  {type:      "duck", value:   10},
  {type: "furniture", value: 1200},
  {type:   "machine", value:   77}
]


console.log(
    inventory
    .filter(inventory => inventory.value)
    .map(inventory => inventory.value)
    .reduce((inventory, total) => total + inventory)
)
// Get an array of all the machines with value over 500

console.log(
    inventory
    .filter(inventory => inventory.value > 500)
    .map(inventory => inventory.value)
)