// Question 1
function transmogrifier(num1, num2, num3) {
    var result = Math.floor(num1 * num2) * num3;
    return result
} 
transmogrifier(1, 2, 2)



// Question 2 
function sum(array) {
    var total = 0;
    for (let index = 0; index < array.length; index++) {
        total = total + array[index] 
        
    } 
    return total;
}


// Question 3 Lengths

function lengths(arr) {
    var lengthArray = []
    for (let i = 0; i < arr.length; i++) {
        lengthArray = lengthArray + arr[i].length
    }
    return lengthArray.split('').join(', ');
}

// Question 4
var fruits = ['kiwi', 'apple', 'mango']
var x = lengths(fruits)
var y = sum([x])
console.log(y);




// Question 5

// https://gist.github.com/epoch/41cfbbe733478bd459a2158aff9bfa00