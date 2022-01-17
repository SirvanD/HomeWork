//// Task 1
// let evenArray = []
// function onlyEven(array) {
//     array.forEach(number => {
//         if (number % 2 === 0) {
//             evenArray.push(number)
//         }   
//     });
//     return evenArray
// }

// onlyEven([1,2,3,4])

// const onlyEven = array => array.filter( number => number % 2 === 0 );

// console.log(onlyEven([1, 2, 3, 4, 5, 6]))

//// Task 2 
// let integers = []
// function countIntegers(array) {
//     array.forEach(number => {
//         if (number % 1 === 0) {
//             integers.push(number)
//         }
//     });
//     console.log(integers.length);
// }
// countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4])

// const countIntegers = array => array.filter( number => number % 1 === 0).length
// console.log(countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]));

//// Task 3
// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string. use .map

// function lengths(array) {
//     let wordLengths = []
//     array.map(function(word){
//         wordLengths.push(word.length)
//     })
//     console.log(wordLengths);
    
// }
// lengths(['my', 'cake', 'pudding'])


//// Task 4
// function getSquares(array) {
//    console.log(array.map(function (square) {
//         return square * square
//     })
//    )}

// getSquares([1, 2, 3, 4, 5])

//// Task 5

var inventory = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
  ]

console.log(inventory.filter(item => item.type === 'machine').map(item => item.value).reduce((total, accum) => total + accum))

console.log(inventory.filter(item => item.value > 500 && item.type === 'machine'));
