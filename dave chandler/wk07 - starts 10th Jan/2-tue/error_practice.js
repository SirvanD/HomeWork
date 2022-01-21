//1. Uncaught SyntaxError: Unexpected token {
//see's a token that it is not expecting that is syntactically in the wrong place!
//let value = 5 {

//2. Uncaught ReferenceError: greeting is not defined
//called reference of greeting that hasn't been defined
//console.log(greeting);

//3. GET file:///scripts.js net::ERR_FILE_NOT_FOUND
//reference error - looking for local file scripts.js which doesn't exist

//4. GET https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/1.0.0/js/bootstrap.min.js 404 (Not Found)
//reference error - looking for remote content delivery network (cdn) js file that doesn't exist at the URI

//5. Uncaught TypeError: "hello".push is not a function
//called array method push on string type - method doesn't exist for that data type

//6. Uncaught TypeError: str.join is not a function
//called array method join on string type - method doesn't exist for that data type

//7. Uncaught TypeError: Cannot read property 'name' of undefined
//so error is due to trying to pass in an arguement
// function myFunc(inVar) {
//   if (inVar === undefined) {
//     console.log(inVar.name);
//   }
//   return inVar;
// }
// var testVar;
// console.log(myFunc(testVar));

//8. Uncaught SyntaxError: missing ) after argument list
//missing a closing )
// if( 1 < Math.PI {"do stuff"}

//9. Uncaught ReferenceError: Invalid left-hand side in assignment
//invalid comparison on the LHS
// if (1 = "a") {
// ("do stuff");
// }

//10. Uncaught SyntaxError: Unexpected number
//when you handle numbers incorrectly - interpolator expects a number but doesnt get one.
//let number = 1,1

//11. Uncaught SyntaxError: Unexpected string
//when a string is passed and it isnt expected - below, there's no concatinator so the second string is unexpected
//console.log('something' "stuff");

//12. Uncaught SyntaxError: Unexpected identifier
//when code gets passed an identifier and it wasn't expecting one. below is missing a comma and gets passed a key/identifier it didnt expect
// selector = {
//     key1: "this"
//     key 2: "that"
// }

//13. Uncaught RangeError: Maximum call stack size exceeded
//basically exceed the maximum size of the stack for a process - so looped self calling functions are a good way to do it! I've done this when using setTimeout inside for loops before by accident!
// (function a() {
//   a();
// })();
