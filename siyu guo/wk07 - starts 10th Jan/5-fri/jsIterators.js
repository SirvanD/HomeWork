// JavaScript Iterators
// .forEach() and .filter()
// Write a function named onlyEven that returns evens numbers in an array. Write one version that use forEach and then write another version that uses filter

// onlyEven([1,2,3,4,5,6,7]) // => [2,4,6]

var onlyEven = arr => {
    var result = []
    arr.forEach(number => number % 2 == 0 ? result.push(number) : null)
    return result
}

var onlyEvenV2 = arr => {
    var result = arr.filter(number => number % 2 == 0)
    return result
}

onlyEven([1, 2, 3, 4, 5, 6, 7])//?
onlyEvenV2([1, 2, 3, 4, 5, 6, 7])//?

// .forEach() or .filter()
// countIntegers – counts how many integers there are in an array
// countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]) // => 4
// Hint: Google how you can check if a number is an integer in JavaScript



var countIntegers = arr => {
    var result = arr.filter(number => {
        if (number == Math.floor(number)) {
            return number
        }
    })
    return result.length
}

var countIntegersV2 = arr => {
    var result = []
    arr.forEach(
        number => {
            number == Math.floor(number) ?
                result.push(number) : null
        }
    )
    return result.length
}


countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4])
countIntegersV2([4, 2.2, 5, 6, 4.2, 8.2, 4])


// .map() oldie but goodie
// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string. use .map
// lengths(['my', 'cake', 'pudding']); // => [2,4,7]
lengths = arr => {
    return arr.map(str => str.length)
}

lengths(['my', 'cake', 'pudding'])

// .map()
// getSquares – takes in an array of numbers and returns an array of their squares. If you want more practice write one version using .forEach and then write another version using .map
// getSquares([1, 2, 3, 4, 5]) // => [1, 4, 9, 16, 25]

var getSquares = arr => {
    return arr.map(number => number ** 2)
}

getSquares([1, 2, 3, 4, 5])

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

var machines = inventory.filter(
    item => item["type"] == "machine"
)
var values = machines.map(machine => machine["value"])
var totalValue = values.reduce((total, number) => total + number)
console.log(totalValue)
