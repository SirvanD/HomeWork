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
    console.log(total)
    }
    return total
}

function lengths(arr) {
    for(i=0;i < arr.length; i++){
        arr[i] = arr[i].split("").length
    }
    return arr
}

function sumOfFruits(fruits) {
    lengths(fruits)
    console.log(fruits)
    sum(fruits)
}


sumOfFruits(fruits)