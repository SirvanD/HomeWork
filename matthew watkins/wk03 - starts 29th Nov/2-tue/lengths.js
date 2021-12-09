function lengths(splitArray) {
    // var splitArray = string.split(` `)
    var lengthArray = []
    for (let i = 0; i < splitArray.length ; i++){
        lengthArray.push(splitArray[i].length)
    }
    return lengthArray

}
console.log(lengths(["hello", "how", "are", "you"]))