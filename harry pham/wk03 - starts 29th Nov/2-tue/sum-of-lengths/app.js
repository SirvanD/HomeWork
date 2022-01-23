// var fruits = ['kiwi', 'apple', 'mango']

// function sumOfFruits(fruits) {
//     console.log("length", fruits.length)
//     total = 0
//     i = 0
//     while(i < fruits.length) {
//        total = total + fruits[i].split("").length 
//        i++
//        console.log("total", total)
//     }
//     console.log("final result", total)
// }

// sumOfFruits(fruits)


var fruits = ['kiwi', 'apple', 'mango']

function sum(arr) {
    let total = 0
    for(i=0;i<arr.length;i++) {
    total = total + arr[i]
    }
    return total
}

function lengths(arr) {
    newArr = new Array();
    for(i=0;i < arr.length; i++){
        newArr.push(arr[i].length)
    }
    return newArr
}

function sumOfFruits(fruits) {
    console.log(sum(lengths(fruits)))
}


sumOfFruits(fruits)