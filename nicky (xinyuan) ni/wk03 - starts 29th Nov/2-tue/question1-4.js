console.log("homework");
//1
function transmogrified(num1,num2,num3){
    return Math.pow(num1 * num2, num3)
}

//2
function sum(arr) {
    var sum = 0;
    for (var index = 0; index<arr.length; index++) {
        sum = sum +arr[index];
    }
    return sum;
}
    
//3
function lengths(arr){
    var lengthArr = [];
    for (var index = 0; index<arr.length; index++) {
        lengthArr.push(arr[index].length);
    }
    return lengthArr;
}

//4
var fruits = ['kiwi', 'apple', 'mango']

function sumLengths(arr) {
    return sum(lengths(arr));
}

sumLengths(fruits);




