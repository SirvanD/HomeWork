// JavaScript Iterators

// .forEach() and .filter()
// Write a function named onlyEven that returns evens numbers in an array. Write one version that use forEach and then write another version that uses filter

// onlyEven([1,2,3,4,5,6,7]) // => [2,4,6]

// The forEach() method executes a provided function once for each array element.
function onlyEven(arr) {
  let arrTemp = [];
  arr.forEach(element => {
    if (element % 2 == 0) {
      arrTemp.push(element)
    }
  });
  return arrTemp
}

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const onlyEven = arr => {
  return arr.filter(element => element % 2 === 0);
}
console.log(onlyEven([1, 2, 3, 4, 5, 6, 7]))

// .forEach() or .filter()
// countIntegers – counts how many integers there are in an array
// countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]) // => 4
// Hint: Google how you can check if a number is an integer in JavaScript  ----  Number.isInteger() return true/false

const countIntegers = arr => {
  let count = 0;
  arr.forEach(element => {
    Number.isInteger(element) ? count += 1 : count += 0
  });
  return count
}

const countIntegers = arr => {
  return arr.filter(element => Number.isInteger(element)).length
}

console.log(countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]))


// .map() oldie but goodie
// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string. use .map

// lengths(['my', 'cake', 'pudding']); // => [2,4,7]

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const lengths = arr => {
  return arr.map(item => item.length)
}
console.log(lengths(['my', 'cake', 'pudding']))

// .map()
// getSquares – takes in an array of numbers and returns an array of their squares. If you want more practice write one version using .forEach and then write another version using .map
// getSquares([1, 2, 3, 4, 5]) // => [1, 4, 9, 16, 25]

const getSquares = arr => {
  let arrTemp = [];
  arr.forEach(element => {
    element = element * element;
    arrTemp.push(element);
  })
  return arrTemp
}

const getSquares = arr => {
  return arr.map(item => item = Math.pow(item, 2))
}

console.log(getSquares([1, 2, 3, 4, 5]))

// .map(), .filter() & .reduce()
// Write an expression using array iterator methods (like filter and reduce) to compute the total value of the machines in the inventory array. Use arrow functions.
var inventory = [
  { type: "machine", value: 5000 },
  { type: "machine", value: 650 },
  { type: "duck", value: 10 },
  { type: "furniture", value: 1200 },
  { type: "machine", value: 77 }
]
// Get an array of all the machines with value over 500

console.log(
  inventory
    .filter(item => item.type === 'machine' && item.value > 500)
    .map(item => item = item.value)
    .reduce((each, total) => each + total)
)
