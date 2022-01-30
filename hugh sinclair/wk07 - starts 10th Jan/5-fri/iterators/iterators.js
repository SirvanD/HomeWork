
// .forEach and .filter
const onlyEvenFilter = numArr => numArr.filter(num => num %2 === 0)

const onlyEvenForEach = numArr => {
    let evensArray = []
    numArr.forEach(num => {
        if (num %2 === 0){
            evensArray.push(num)
        }
    })
    return evensArray
}


// .forEach or .filter

const countIntegers = numArr => numArr.filter( num => Number.isInteger(num)).length

//.map oldie but goodie
const lengths = strArr => strArr.map(str => str.length)

//.map 

const getSquares = numArr => numArr.map(num => num*num)

var inventory = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
  ]

inventory
        .filter(item => item.type == "machine")
        .map(machine => machine.value)
        .reduce( (totalPrice, currentPrice) => totalPrice + currentPrice)
