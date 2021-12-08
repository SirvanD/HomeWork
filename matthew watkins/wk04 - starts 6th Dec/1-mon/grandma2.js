var byeCounter = 0
var yearArray = [1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950]

while (byeCounter != 3) {
    var startPrompt = prompt(`say something to grandma`)
    //guardian statement to see if it is equal to `bye` uppercase
    if (startPrompt == `BYE`){
        byeCounter++
        alert(startPrompt)
    } else {
        var randomYear = Math.floor(Math.random() * yearArray.length)
        var yearInput = yearArray[randomYear]
        startPrompt = alert(`NO, NOT SINCE ${yearInput}`)
        byeCounter = 0
    }
}
