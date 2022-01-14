// .forEach() and .filter()
// Write a function named onlyEven that returns evens numbers in an array. Write one version that use forEach and then write another version that uses filter

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

// FOR EACH //
function onlyEven(numbers) {
    var evenNum = [];
    numbers.forEach(num => {
        if(num % 2 === 0) {
            evenNum.push(num);
        }
    })
    return evenNum;
};

// FILTER //
function onlyEven2(numbers) {
    return numbers.filter(num => num % 2 === 0)};

/////////////////////////////////////////////////////////////////

// countIntegers – counts how many integers there are in an array

// FOR EACH //
var integerCount = 0;
numbers.forEach(num => {
    if(Number.isInteger(num)) {
        integerCount++;
    }
});
console.log(integerCount);

// FILTER //
var iCount = 0;
numbers.filter(num => {
    if (Number.isInteger(num)) {
        iCount++;
    }
 });
 console.log(iCount);

 //////////////////////////////////////////////////////////////////

//  Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string. use .map

// lengths(['my', 'cake', 'pudding']); // => [2,4,7]

function lengths(stringArray) {
    console.log(stringArray.map(string => string.length));
};

//////////////////////////////////////////////////////////////////

// getSquares – takes in an array of numbers and returns an array of their squares. If you want more practice write one version using .forEach and then write another version using .map
// getSquares([1, 2, 3, 4, 5]) // => [1, 4, 9, 16, 25]

function squares(numArray) {
    console.log(numArray.map(num => num * num));
};

//////////////////////////////////////////////////////////////////////////////////////

// MAP - FILTER - REDUCE
// 1: Write an expression using array iterator methods (like filter and reduce) to compute the total value of the machines in the inventory array. Use arrow functions.

var inventory = [
  {type:   "machine", value: 5000},
  {type:   "machine", value:  650},
  {type:      "duck", value:   10},
  {type: "furniture", value: 1200},
  {type:   "machine", value:   77}
]
console.log(
inventory                           //filter by param
        .filter(item => item.type == "machine") //all loops. name each loop.
        .map(item => item.value) // map all the values
        .reduce((total, value) => total + value) // previous value + current value
)

// 2: Get an array of all the machines with value over 500

console.log(
inventory
    .filter(item => item.type == "machine" && item.value > 500)
    .map(item => item)
)

//////// HI DAN ///////