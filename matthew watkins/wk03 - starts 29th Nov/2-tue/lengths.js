function lengths(stringsArray) {
    var splitFunction = stringsArray.split(` `)
    var lengthArray = []
    for (let i = 0; i < splitFunction.length ; i++){
        lengthArray.push(splitFunction[i].length)
    }
    return lengthArray

}