var fruits = ['kiwi', 'apple', 'mango'];

function lengths(fruits) {
    var index = 0;
    var arrayOfLengths = []; //needs to be local inside the function
    while (index < fruits.length) {
        arrayOfLengths.push(fruits[index].split('').length);
        index++;
    }
    return arrayOfLengths;
}

function sum(arrayOfLengths) {
    var i = 0;      //put variables inside the funtion otherwise you cannot re-use the function
    var total = 0;
    while (i < arrayOfLengths.length) {
        total = total + arrayOfLengths[i];
        i++;
    } 
    return total;
}

function fruitTotalLength(fruits) {
    var arrayOfLengths = lengths(fruits); //functions can be used as part of the maths
    var total = sum(arrayOfLengths);
    return total;
}
