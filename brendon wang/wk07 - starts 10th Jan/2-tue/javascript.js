// 1. Uncaught SyntaxError: Unexpected token {

// extra { in code which causes error 

// error{

//2. Uncaught ReferenceError: greeting is not defined

// called variable is not defined 
console.log(greeting)


//3. GET file:///scripts.js net::ERR_FILE_NOT_FOUND

// script file is not in directory or wrong name for file



//4. GET https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/1.0.0/js/bootstrap.min.js 404 (Not Found)

// address your searching for does not exist 


//5. Uncaught TypeError: "hello".push is not a function

// can only use push function on array not string
array = "hello".push()


//6. Uncaught TypeError: str.join is not a function

// can only use join function on array variables not string
str = "hello"
str.join()

//7.Uncaught TypeError: Cannot read property 'name' of undefined

// cannot read name because the key:value pair in object is not defined

console.log(blah.name)


//8.Uncaught SyntaxError: missing ) after argument list
// no connectors in console.log so function thinks the argument should have ended early 
console.log("hi" "there")

//9. Uncaught ReferenceError: Invalid left-hand side in assignment

// using a "=" instead of an "==" for comparisons
var one = 1
if (one = 1 || one = 2) {
    return one
}
//10.Uncaught SyntaxError: Unexpected number

// extra number in a variable

var number = 1,500


//11.Uncaught SyntaxError: Unexpected string
// extra string in a variable

var word = "hello" "there"

//12.Uncaught SyntaxError: Unexpected identifier
// extra indentifier in a variable

var let word = "hello"


//13.Uncaught RangeError: Maximum call stack size exceeded
// infinite loop exceeds stack limit

// let i = 1
// while (i > 0) {
//     i++
// }




