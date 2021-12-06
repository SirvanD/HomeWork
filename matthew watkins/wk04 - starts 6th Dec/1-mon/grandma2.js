var startPrompt = prompt(`say something to grandma`)
var byeCounter = 0
var yearArray = [1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950]
var randomYear = Math.floor(Math.random() * yearArray.length)
var yearInput = yearArray[randomYear]

while (byeCounter != 3) {
    //startPrompt ;
    //guardian statement to see if it is equal to `bye` uppercase
    if (startPrompt != `BYE`){

    if (startPrompt == startPrompt.toUpperCase()) {
        startPrompt = prompt(`NO, NOT SINCE ${yearInput}`)
        byeCounter = 0 ;
     } else if (startPrompt == startPrompt.toLowerCase())  {
        startPrompt = prompt(`HUH?! SPEAK UP, SONNY!`)
        byeCounter = 0
    } //Conditional if statement to exit your loop if your counter hits three
     else{
        startPrompt = `WHAT?, LEAVING SO SOON?`
        byeCounter++
     }
    }
    //if statement incrementing a counter to 3
    
}