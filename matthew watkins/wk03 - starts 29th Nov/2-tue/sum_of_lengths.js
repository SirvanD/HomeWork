var fruits = [`kiwi`, `apple`, `mango`]

function sum(array) {
    let sum = 0
    for(let i = 0; i < array.length ; i++) {
        sum = sum + array[i]
    }
    return sum
}

function lengths(stringsArray) {
    // var splitFunction = stringsArray.split(` `)
    var lengthArray = []
    for (let i = 0; i < stringsArray.length ; i++){
        lengthArray.push(stringsArray[i].length)
    }
    return lengthArray

}

console.log(sum(lengths(fruits.join (` `))))





// function displayTotal() {

// }
