// Question 1
function transmogrifier(num1, num2, num3) {
    var result = (num1 * num2) ** num3  
    console.log(result);
    
} 
// test transmogrifier(1, 2, 2)



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
    newArray = []
    for (let i = 0; i < arr.length; i++) {
        newArray = newArray + ', ' + arr[i].length 
    }
    return newArray;
}
// test lengths(['hellohellohello', 'bye', 'test', 'test'])

// Question 4
var fruits = ['kiwi', 'apple', 'mango']
sum(lengths(fruits))




// Question 5

// https://gist.github.com/epoch/41cfbbe733478bd459a2158aff9bfa00