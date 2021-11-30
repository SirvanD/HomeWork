var fruits = ['kiwi', 'apple', 'mango']

function sumOfFruits(fruits) {
    console.log("length", fruits.length)
    total = 0
    i = 0
    while(i < fruits.length) {
       total = total + fruits[i].split("").length 
       i++
       console.log("total", total)
    }
    console.log("final result", total)
}

sumOfFruits(fruits)