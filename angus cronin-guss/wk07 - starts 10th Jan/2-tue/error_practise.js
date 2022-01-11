
// Error 1: Uncaught SyntaxError: Unexpected token {
// This means that the syntax is incorrect in your code, specifically there's a opening curly bracket. 
// var hello = 'hello' {


// Errror 2: Uncaught ReferenceError: greeting is not defined
// The program is unable to complete a certain task due to greetings not being defined in your code. 
// console.log(greeting);

// Error 3: GET file:///scripts.js net::ERR_FILE_NOT_FOUND
// This error means the file you are trying to request is not found. This could mean you have misspelled something or the path is incorrect.
// example will work in html file
/* <script type='text/javascript' src='/this-wont-work.lol'></script> */

// Error 4: GET https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/1.0.0/js/bootstrap.min.js 404 (Not Found)
// The files you are trying to request using the get request can't be found by the server 
<link rel="stylesheet" href="https://www.googlewwwww.com/" className="href"/>

// Error 5: Uncaught TypeError: "hello".push is not a function
// 'hello' is not an array it's a string, therefore this will not work. 
// "This won't push anywhere".push()

// Error 6: Uncaught TypeError: str.join is not a function
// join is an array function, that means str must be a string. 
// var string = 'string'
// string.join()

// Error 7: Uncaught TypeError: Cannot read property 'name' of undefined
// This means that the variable has not been defined within a container 
// let details = [
//     {age: 10,
//     height: 110}
// ]
// console.log(details.age.name);

// Error 8: Uncaught SyntaxError: missing ) after argument list
// This error is usually because of an error when calling a function, it does not always mean a missing closing bracket.
// console.log(5 + 7 2);

// Error 9: Uncaught ReferenceError: Invalid left-hand side in assignment
//  this error usually shows when you are assigning an arguement incorrectly. The example below shows me trying to assign a result to a function instead of passing in an arguement. 
// function randomFunction(one) {
//     return one * 10   
// }
// randomFunction() = 20

// Error 9: Uncaught SyntaxError: Unexpected number
// This error means that there is an integer located in a part of your code it cannot be. 
// let addThese 1 = 2 + 2 

// Error 10: Uncaught SyntaxError: Unexpected string
// Unexpected string means that a string has been placed in your code where it shouldn't be
// let badString 'hello' = 2 + 2

// Error 11: Uncaught SyntaxError: Unexpected identifier
// Usually caused by the mutation of a const variables but can also be from incorrect syntax that causes JS to read your code wrong. For example this loop without a ; within the arguement. 
// const name = 'Angus'
// for (let index = 0; index < name.length index++) {
//     console.log(index);
// }

// Error 12: Uncaught RangeError: Maximum call stack size exceeded
// JS has a limit when of 1MB of memory when executing code. If you exceed that amount this error message will show. This usually happens when you're trying to call lots of function. 
// function breakTheCode() {
//     breakTheCode()
    
// }
// breakTheCode()





