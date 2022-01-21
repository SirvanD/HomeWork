// .forEach() and .filter()
// Write a function named onlyEven that returns evens numbers in an array. Write one version that use forEach and then write another version that uses filter

// onlyEven([1,2,3,4,5,6,7]) // => [2,4,6]

// function onlyEven(nums) {
//     let even = []
//     console.log(nums)
//     nums.forEach(num => {
//         console.log(num)
//         if(num % 2 == 0) {
//             even.push(num)
//         }
//     })
//     return even
// }

// function onlyEven(nums) {
//     console.log(nums)
//     const even = nums.filter(num => num % 2 === 0)
//     return even
// }


// .forEach() or .filter()
// countIntegers – counts how many integers there are in an array
// countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]) // => 4
// Hint: Google how you can check if a number is an integer in JavaScript

function countIntegers(nums) {
    console.log(nums)
    const integers = nums.filter(num => Number.isInteger(num))
    console.log(integers.length)
    return integers.length
}

countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4])

// .map() oldie but goodie
// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string. use .map

// lengths(['my', 'cake', 'pudding']); // => [2,4,7]

// function mapping(strs) {
//     console.log(strs)
//     const lengthOfStr = strs.map(str => str.length)
//     console.log(lengthOfStr)
// }

// mapping(['my', 'cake', 'pudding'])



// .map()
// getSquares – takes in an array of numbers and returns an array of their squares. If you want more practice write one version using .forEach and then write another version using .map
// getSquares([1, 2, 3, 4, 5]) // => [1, 4, 9, 16, 25]

    // function getSquares(nums) {
    //     console.log(nums.map(num => num * num))
    //     return nums.map(num => num * num)
    // }

    // getSquares([1, 2, 3, 4, 5])

// .map(), .filter() & .reduce()
// Write an expression using array iterator methods (like filter and reduce) to compute the total value of the machines in the inventory array. Use arrow functions.
var inventory = [
  {type:   "machine", value: 5000},
  {type:   "machine", value:  650},
  {type:      "duck", value:   10},
  {type: "furniture", value: 1200},
  {type:   "machine", value:   77}
]

// function totalValue(items) {
//     const valueOfInv = items.map(item => item.value)
//     const sum = valueOfInv.reduce((accum, curr) => {
//         return accum + curr
//     }, 0)
//     console.log(sum)
// }

// totalValue(inventory)

// Get an array of all the machines with value over 500

// function conditionArray(items) {
//     console.log(items)
//     const conditionValue = items.filter(item => item.value > 500)
//     console.log(conditionValue)
// }

// conditionArray(inventory)

