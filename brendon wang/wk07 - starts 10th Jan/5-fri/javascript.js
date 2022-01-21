var numbers = [1, 2, 3, 4, 5, 6, 7]
var onlyEven = []
numbers.forEach(num => {
    if (num % 2 == 0) {
        onlyEven.push(num)
    }
});
console.log(onlyEven)

var onlyEven2 = numbers.filter(num => num % 2 == 0)
console.log(onlyEven2)

var countIntergers = [4, 2.2, 5, 6, 4.2, 8.2, 4]
var counter = 0
countIntergers.forEach((num) => {
    if (num % 1 == 0) {
        counter++
    }
})
console.log(counter)

var counter2 = 0
countIntergers.filter(() => counter2++)
console.log(counter2)

items = ['my', 'cake', 'pudding']
var itemLength = items.map((item) => { return item.length })
console.log(itemLength)

items = [1, 2, 3, 4, 5]
var getSquares = items.map((item) => { return item ** 2 })
console.log(getSquares)

var inventory = [
    { type: "machine", value: 5000 },
    { type: "machine", value: 650 },
    { type: "duck", value: 10 },
    { type: "furniture", value: 1200 },
    { type: "machine", value: 77 }
]

var totalValue = inventory
    .map(item => { return item.value })
    .reduce((accum, item) => {
        return accum + item
    }, 0)
console.log(totalValue)

var over500 = inventory
    .map(item => { return item.value })
    .filter(value => value > 500)
    .reduce((accum, item) => {
        return accum + item
    }, 0)
console.log(over500)

