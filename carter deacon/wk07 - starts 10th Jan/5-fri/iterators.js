// .forEach() and .filter()
// Write a function named onlyEven that returns evens numbers in an array. Write one version that use forEach and then write another version that uses filter

// Only evens
var numbers = [1,2,3,4,5,6,7]
function onlyEven(numbersArr) {
    var evensArray = []
    numbersArr.forEach(number => {
        if (number % 2 == 0) {
            evensArray.push(number)
        }
    })
    return evensArray;
}

// Name evens just to not use the same name again
const onlyEvens = () => numbers.filter(num => num % 2 == 0)

console.log(onlyEvens());

// count integers (forEach)
var counts = [4, 2.2, 5, 6, 4.2, 8.2, 4]

function countIntegers(numbersArr) {
    var count = 1;
    counts.forEach(number => {
        if (number % 1 == 0) {
            count = count + 1;
        }
    })
    return count;
}

const countIntegers2 = () => counts.filter(num => num * 1 == 0)

// lengths (map)
var words = ['my', 'cake', 'pudding'];

const lengths = () => words.map(word => word.length)
console.log(lengths())

// getSquares (map)
const getSquares = () => numbers.map(number => number * number)
console.log(getSquares());

// .map(), .filter() & .reduce()
var inventory = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
]

console.log(
    inventory
        .filter(item => item.type === "machine")
        .map(item => item.value)
        .reduce((total, value) => total + value)
)