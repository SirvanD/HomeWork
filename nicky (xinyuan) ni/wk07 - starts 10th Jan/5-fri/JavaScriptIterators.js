function onlyEven1(numbers){
    var evenArray = [];
    numbers.forEach(number => {
        if (number % 2 === 0) {
          evenArray.push(number);
        }
    });
    return evenArray;
}

function onlyEven2(numbers){
    const evenArray = numbers.filter(number => {
        return number % 2 === 0;
    });
    return evenArray;
}



function countIntegers1(numbers){
    var total = 0;
    numbers.forEach(number => {
        if (Number.isInteger(number)) {
          total ++;
        }
    });
    return total;
}

function countIntegers2(numbers){
    const intArray = numbers.filter(number => {
        return Number.isInteger(number)  === true;
    });
    return intArray.length;
}



function lengths(words){
    const lengthsArray = words.map(word => {
        return word.length;
    })
    return lengthsArray;
}



function getSquares(numbers){
    const squaresArray = numbers.map(number => {
        return Math.pow(number,2);
    })
    return squaresArray;
}



var inventory1 = [
    {type:   "machine", value: 5000},
    {type:   "machine", value:  650},
    {type:      "duck", value:   10},
    {type: "furniture", value: 1200},
    {type:   "machine", value:   77}
]

function over500InvTotal(inventory){
    console.log (
        inventory
        .filter(item => item.value > 500)
        .map(item => item.value)
        .reduce((total,value) => total + value)
    )
}