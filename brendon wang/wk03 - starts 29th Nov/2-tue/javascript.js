// transmogrifier

function transmogrifier(num1, num2, num3) {
    return (num1*num2)**num3
}

// sum of arrray

function sumArray(numberArray) {
    var sum = 0
    numberArray.forEach(function(num){
        sum = sum + num
    });
    return sum
}

// lengths

function lengths(wordArray) {
    var newArray = []
    for (let i = 0; i < wordArray.length; i++){
        newArray[i] = wordArray[i].length 
    }
    return newArray
}

// sum of lengths

var fruits = ['kiwi', 'apple', 'mango']

// sumArray(lengths(fruits)) = 14