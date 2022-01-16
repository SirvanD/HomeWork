
// .forEach() - onlyEven()
function onlyEven(arr) {
    let evenArr = []
    
    arr.forEach(item => {
        item % 2 == 0 ? evenArr.push(item) : null
    });

    return evenArr    
}

console.log(onlyEven([1,2,3,4,5,6,7]));

// .filter() - onlyEven()
function onlyEven(arr) {
    return arr.filter(item => item % 2 == 0)
}

console.log(onlyEven([1,2,3,4,5,6,7]));


// .forEach() - countIntegers()
function countIntegers(arr) {
    let numOfInt = 0;

    arr.forEach(item => {
        Number.isInteger(item) ? numOfInt += 1 : null
    });

    return numOfInt 
}

// .map() - countIntegers()
console.log(countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]));

function countIntegers(arr) {
    return arr.filter(item => Number.isInteger(item)).length
}

console.log(countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]));


// map() - lengths()
function lengths(arr) {
    return arr.map(item => item.split('').length)
}

console.log(lengths(['my', 'cake', 'pudding']));


// .map()
function getSquares(arr) {
    return arr.map(item => item * item)
}

console.log(getSquares([1, 2, 3, 4, 5]));


// .map(), .filter() & .reduce()
var inventory = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
  ]

//  compute the total value of the machines in the inventory array
console.log(
    inventory
    .filter(item => item.type === 'machine')
    .map(item => item.value)
    .reduce((total, value) => total + value)
); 

// Get an array of all the machines with value over 500

console.log(inventory.filter(item => item.type === 'machine' && item.value > 500));