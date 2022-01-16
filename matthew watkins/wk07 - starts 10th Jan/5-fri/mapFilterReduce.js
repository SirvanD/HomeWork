
function onlyEven (numberArray) {

    numberArray.forEach(number => {
        if (number % 2 == 0) {
            console.log(number)
        }
    });
}

//const onlyEven2 = numberArray.filter(number => number %2 == 0);

//with filter the filter acts as the forEach itself its kind of like an 
//if statement looping through the array


function countIntegers(numberArray2) {

    const integerArray = []
    numberArray2.forEach(number => {
        if (Number.isInteger(number)){
            integerArray.push(number)
        }
    });
    return integerArray.length
}

const numberArray2 = [4, 2.2, 5, 6, 4.2, 8.2, 4]
//const countIntegers = numberArray2.filter(number => Number.isInteger(number)).length


const array3 = ['my', 'cake', 'pudding']
const lengths = array3.map(word => word.length)

const squares = [1,2,3,4,5,6]
const getSquares = squares.map(number => number * number)


var inventory = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
  ]

  const totalValue = inventory.filter(object => object['type'] == "machine")
  .map(object => object['value'])
  .reduce((tValue, mValue) => tValue + mValue);


const machines = inventory.filter(object => object['type'] == 'machine' && object['value'] > 500)
