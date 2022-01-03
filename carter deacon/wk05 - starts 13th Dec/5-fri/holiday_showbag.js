// Remove Ends
// Write a function called removeEnds that accepts a single string argument, then returns the a string with the first and last characters removed.
// If the length of the string argument is less than 3, return an empty string.

function removeEnds(string) {
    if (string.length < 3) {
        return "";
    } else {
        let stringSplit = string.split('');
        stringSplit.pop();
        stringSplit.shift();
        let joinedString = stringSplit.join('');
        return joinedString;
    }
}

removeEnds('SEI Rocks!'); //=> "EI Rocks"
removeEnds('a'); //=> "" (empty string)

// Format Padding
// Write a function called formatWithPadding that accepts three arguments:
// A numeric argument (an integer) representing the number to format.
// A string argument (a single character) representing the character used to "pad" the returned string to a minimum length.
// Another numeric argument (an integer) representing the length to "pad" the returned string to.
// The function should return the integer as a string, "left padded" to the length of the 3rd arg using the character provided in the 2nd arg.
// If the length of the integer converted to a string is equal or greater than the 3rd argument, no padding is needed - just return the integer as a string.

function formatWithPadding(num, pad, length) {
    var totalLength = length - String(num).length;
    var padArray = []
    if (String(num).length > length) {
        return num;
    } else {
        padArray.push(num);
        for (let i = 0; i < totalLength; i++) {
            padArray.unshift(pad);
        }
        return padArray.join('');
    }
}

formatWithPadding(123, '0', 5); //=> "00123"
formatWithPadding(42, '*', 10); //=> "********42"
formatWithPadding(1234, '*', 3); //=> "1234"

// Remove Spaces
// Write a function called removeSpaces that accepts a single string argument, then returns the string with all space characters removed.
// You're not allow to used the built in function .trim(), .replace() and .replaceAll()

function removeSpaces(string) {
    var stringArray = string.split('');
    for (let i = 0; i < string.length; i++){
        if (stringArray[i] === " ") {
            stringArray.splice([i], 1, '');
        } 
    }
    var noSpaces = stringArray.join('');
    return noSpaces;
}

// Ultimate Map Faker
// You are a villain trying to trap an adventuring archaeologist. Write a function makeFakeMap that takes two numbers as arguments and returns an array of arrays to represent a map. It should be filled with the 'A' character, except for one, which should be an uppercase X.

// Part 1 & 2. Position of X is always random and user can enter their letter
function makeFakeMap(row, col, key) {
    let mapArray = [];
    var randomRow = Math.floor(Math.random() * row);
    var randomCol = Math.floor(Math.random() * col);
    for (let i = 0; i < row; i++) {
        let mapRow = [];
        for (let j = 0; j < col; j++) {
            mapRow.push('A');
        }
        mapArray.push(mapRow);
    }
    mapArray[randomRow][randomCol] = key;
    return mapArray;
}