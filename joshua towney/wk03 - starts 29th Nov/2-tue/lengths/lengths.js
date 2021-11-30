// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// lengths(['my', 'cake', 'pudding']) // => [2,4,7]
// lengths(['now', 'I', 'know', 'my', 'ABC!']) // => [3,1,4,2,4]

var stringArray = ['my','cake','pudding'];
var alphabet = ['now','I','know','my','ABC!'];
var arrayOfLengths = [];
var i = 0;

// arrayOfLengths - PUSH new number into array

// function lengths(alphabet) {
//     while (i < alphabet.length) {
//         arrayOfLengths.push(alphabet[i].split('').length);
//         i++;
//     }
//     return arrayOfLengths;
// }

// ^^^^^^^^^^^ HARD CODED ^^^^^^^^^^^


function lengths(arrayInput) {
    while (i < arrayInput.length) {
        arrayOfLengths.push(arrayInput[i].split('').length);
        i++;
    }
    return arrayOfLengths;
}

//^^^^^^^^^^^^USER SELECTS INPUT^^^^^^^